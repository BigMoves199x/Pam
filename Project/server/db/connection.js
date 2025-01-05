const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://FawazAroleDb:BigmovesDb@cluster0.xjyy75u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
           
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

// Call connectDB to test the connection
connectDB();

module.exports = connectDB;
