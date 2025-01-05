const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log('Request received:', req.body); // Log the incoming request
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            console.log('Validation failed'); // Add logging
            return res.status(400).json({ message: "All fields are required" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log('User already exists'); // Add logging
            return res.status(400).json({ message: "User already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashpassword,
        });

        await newUser.save();

        console.log('User registered successfully'); // Add logging
        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error('Error occurred:', err); // Add logging
        return res.status(500).json({ message: "Server error" });
    }
});

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        // Check if the email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the user in the database by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User is not registered" });
        }

        // Compare the provided password with the hashed password in the database
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        //Successful login
        const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 })

        return res.status(200).json({ status: true, message: "Login successful" });
    } catch (err) {
        console.error("Error occurred during login:", err);
        return res.status(500).json({ status: false, message: "Server error" });
    }

});

module.exports = router
