const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userDetails');
const Product = require('../models/usersProduct');
const asyncHandler = require('express-async-handler');

const SECRET_KEY = process.env.KEY;
if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in environment variables');
}

// Generate JWT Token
const generateToken = (id, email) => jwt.sign({ id, email }, SECRET_KEY, { expiresIn: '1d' });

// User Signup
const userSignup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const existingUser = await User.findOne({ email }).lean();
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
  });

  res.status(201).json({
    message: 'User registered successfully',
    token: generateToken(user._id, user.email),
    user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
  });
});

// User Login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email }).select('+password').lean();

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({
    message: 'Login successful',
    token: generateToken(user._id, user.email),
    user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
  });
});

// Middleware: Token-based Authentication
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};

// CRUD Operations
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).lean();
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

const getProductsByUser = asyncHandler(async (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ message: 'User ID is required' });

  const products = await Product.find({ userId });
  res.status(200).json(products);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();
  res.status(200).json(users);
});

const updateUser = asyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password').lean();
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).lean();
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json({ message: 'User deleted successfully' });
});

module.exports = {
  userSignup,
  userLogin,
  authenticateToken,
  getUserById,
  getProductsByUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
