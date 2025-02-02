const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminUser = require('./models/adminUser'); // Import the AdminUser model
const User = require('./models/userDetails'); // Import the User model
const Investment = require('./models/investment'); // Import the Investment model
const connectDB = require('./config/connection'); // Import the DB connection file
const dotenv = require('dotenv');

dotenv.config();

// User data
const userData = [
    {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        phone: "+1234567890",
        password: "alicepassword",
        address: "123 Maple Avenue, Wonderland",
        identificationType: "Passport",
        identificationNumber: "P12345678",
        identificationUpload: "src/assets/watt_idcard.jpg",
        nextOfKin: "Bob Smith",
        nextOfKinPhone: "+1234567890",
        nextOfKinAddress: "123 Maple Avenue, Wonderland",
    },
    {
        firstName: "Charlie",
        lastName: "Brown",
        email: "charlie.brown@example.com",
        phone: "+1987654321",
        password: "charliepassword",
        address: "789 Pine Road, Springfield",
        identificationType: "National ID",
        identificationNumber: "ID9876543",
        identificationUpload: "src/assets/watt_idcard.jpg",
        nextOfKin: "Lucy Brown",
    },
];

// Investment data
const investmentData = [
    {
        amount: 5000,
        investor: "Alice Smith",
        investmentDate: new Date('2024-01-01'),
        status: "Active",
    },
    {
        amount: 10000,
        investor: "Charlie Brown",
        investmentDate: new Date('2024-02-15'),
        status: "Completed",
    },
    {
        amount: 7500,
        investor: "Alice Smith",
        investmentDate: new Date('2024-03-10'),
        status: "Active",
    },
];

// Function to populate the database with users
const populateUsers = async () => {
    try {
        // Clear existing user data
        await User.deleteMany({});
        console.log('Existing user data cleared.');

        // Hash passwords for all users
        const hashedUsers = await Promise.all(
            userData.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        );

        // Insert new user data
        const users = await User.insertMany(hashedUsers);
        console.log('Users added:', users);
    } catch (error) {
        console.error('Error populating user data:', error.message);
        throw error;
    }
};

// Function to populate the database with the admin user
const populateAdmin = async () => {
    try {
        // Check if the admin user already exists
        const existingAdmin = await AdminUser.findOne({ email: process.env.ADMIN_EMAIL });

        if (!existingAdmin) {
            // Hash the admin password
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

            // Create a new admin user
            const admin = new AdminUser({
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                isAdmin: true,
            });

            // Save the admin user to the database
            await admin.save();
            console.log('Admin user created successfully!');
        } else {
            console.log('Admin user already exists.');
        }
    } catch (error) {
        console.error('Error creating admin user:', error.message);
        throw error;
    }
};

// Function to populate the database with investments
const populateInvestments = async () => {
    try {
        // Clear existing investment data
        await Investment.deleteMany({});
        console.log('Existing investment data cleared.');

        // Insert new investment data
        const investments = await Investment.insertMany(investmentData);
        console.log('Investments added:', investments);
    } catch (error) {
        console.error('Error populating investment data:', error.message);
        throw error;
    }
};

// Main function to connect to the database and populate data
const main = async () => {
    try {
        await connectDB(); // Ensure the database is connected
        console.log('Database connected.');

        // Populate the database
        await populateUsers();
        await populateAdmin();
        await populateInvestments();

        console.log('Database population complete.');
    } catch (error) {
        console.error('An error occurred during database population:', error.message);
    } finally {
        // Ensure the database connection is closed
        try {
            await mongoose.connection.close();
            console.log('Database connection closed.');
        } catch (closeError) {
            console.error('Error closing database connection:', closeError.message);
        }
    }
};

// Run the script
main();
