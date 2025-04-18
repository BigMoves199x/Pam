const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./db/connection');
const userRoute = require('./routes/userAuthRoute');
const productRoute = require('./routes/userProductRoute');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow frontend origin
    credentials: true, // Enable sending cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  process.exit(0);
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
