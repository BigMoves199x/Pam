const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connection'); // Import the database connection
const userRoute = require('./routes/userRoute'); // Import the user routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

//Cors
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
})); // Enable CORS for all requests

// Use user routes
app.use('/auth', userRoute);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});