const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/adminUser');
const dotenv = require('dotenv');

dotenv.config();

// Admin login controller
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ status: false, message: "Email and password are required." });
        }

        // Check if the admin user exists
        const user = await AdminUser.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: false, message: "Admin user not found." });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: false, message: "Invalid email or password." });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.KEY,
            { expiresIn: '1h' }
        );

        // Set the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000, secure: true });

        // Respond with success message
        return res.status(200).json({ status: true, message: "Login successful.", token });
    } catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ status: false, message: "An error occurred. Please try again later." });
    }
};

module.exports = { login };
