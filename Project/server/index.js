const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connection'); 
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute'); 
const productRoute = require('./routes/userProductRoute');
const helmet = require('helmet'); 
const morgan = require('morgan'); 

dotenv.config(); 

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());

// Security middleware
app.use(helmet());  // Adding security headers
app.use(morgan('dev'));  // Logging middleware to log requests in dev mode

// Enable CORS for specified origins
app.use(cors({
    origin: ['http://localhost:5173'], // Modify this as needed
    credentials: true
}));

// Use routes
app.use('/auth/admin', adminRoute); 
app.use('/api/user', userRoute);    // User-related CRUD routes
app.use('/api/product', productRoute); // Product-related CRUD routes

// Connect to MongoDB
connectDB();

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

// Graceful shutdown for server termination
process.on('SIGINT', () => {
    console.log('Server shutting down...');
    process.exit(0);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
