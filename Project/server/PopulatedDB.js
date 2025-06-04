const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const User = require('./models/userDetails');
const Product = require('./models/usersProduct');

dotenv.config();

// Sample users data
const userData = [
    {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        phone: "+1234567890",
        password: "alicepassword", // Plain password, will be hashed
        address: "123 Maple Avenue, Wonderland",
        identificationType: "Passport",
        identificationNumber: "P12345678",
        identificationUpload: "src/assets/watt_idcard.jpg",
        nextOfKin: {
            name: "Bob Smith",
            phone: "+1234567890",
            relationship: "Brother",
            address: "123 Maple Avenue, Wonderland",
        },
        investmentDetails: {
            packageType: "Alpha Fixed Yield Fund",
            amount: 5000,
        },
    },
    {
        firstName: "Charlie",
        lastName: "Brown",
        email: "charlie.brown@example.com",
        phone: "+1987654321",
        password: "charliepassword", // Plain password, will be hashed
        address: "789 Pine Road, Springfield",
        identificationType: "National ID",
        identificationNumber: "ID9876543",
        identificationUpload: "src/assets/watt_idcard.jpg",
        nextOfKin: {
            name: "Lucy Brown",
            phone: "+1987654321",
            relationship: "Sister",
            address: "789 Pine Road, Springfield",
        },
        investmentDetails: {
            packageType: "Prime Equity Mutual Fund",
            amount: 10000,
        },
    },
    {
        firstName: "Test",
        lastName: "User",
        email: "test.user@example.com",
        phone: "+1234568940",
        password: "testpassword", // Plain password, will be hashed
        address: "456 Test Road, Test City",
        identificationType: "Passport",
        identificationNumber: "P12345679",
        identificationUpload: "src/assets/watt_idcard.jpg",
        nextOfKin: {
            name: "John User",
            phone: "+1234567890",
            relationship: "Friend",
            address: "456 Test Road, Test City",
        },
        investmentDetails: {
            packageType: "Test Package",
            amount: 5000,
        },
    },
];

// Sample products data (without userId)
const productsData = [
    {
        productName: 'Alpha Fixed Yield Fund',
        investmentType: 'Fixed Income',
        amount: 5000,
        description: 'A low-risk fixed-income investment for steady returns.',
        riskLevel: 'Low',
        duration: 12,
        returnRate: 8,
    },
    {
        productName: 'Digital Asset Growth Fund',
        investmentType: 'Cryptocurrency',
        amount: 10000,
        description: 'A high-risk, high-reward fund focused on digital assets.',
        riskLevel: 'High',
        duration: 24,
        returnRate: 20,
    },
    {
        productName: 'Prime Equity Mutual Fund',
        investmentType: 'Mutual Funds',
        amount: 7000,
        description: 'A diversified mutual fund for stable long-term growth.',
        riskLevel: 'Medium',
        duration: 36,
        returnRate: 12,
    },
    {
        productName: 'Dynamic Blend Fund',
        investmentType: 'Hybrid',
        amount: 8000,
        description: 'A balanced investment strategy combining multiple assets.',
        riskLevel: 'Medium',
        duration: 18,
        returnRate: 15,
    },
];

// Function to populate users
const populateUsers = async () => {
    try {
        await User.deleteMany();
        console.log('Cleared existing users.');

        const hashedUsers = await Promise.all(
            userData.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        );

        const users = await User.insertMany(hashedUsers);
        console.log('Users added successfully.');
        return users;
    } catch (error) {
        console.error('Error populating users:', error.message);
        throw error;
    }
};

// Function to populate products, now takes users array
const populateProducts = async (users) => {
    try {
        await Product.deleteMany();
        console.log('Cleared existing products.');

        // Add userId to each product, cycling through users if fewer products than users
        const productsWithUser = productsData.map((product, i) => ({
            ...product,
            userId: users[i % users.length]._id,
        }));

        await Product.insertMany(productsWithUser);
        console.log('Products added successfully.');
    } catch (error) {
        console.error('Error populating products:', error.message);
        throw error;
    }
};

// Main function to connect and populate database
const main = async () => {
    try {
        await connectDB();
        console.log('Connected to database.');

        const users = await populateUsers();
        await populateProducts(users);

        console.log('Database population completed successfully.');
    } catch (error) {
        console.error('Error during population:', error.message);
    } finally {
        mongoose.connection.close().then(() => console.log('Database connection closed.'));
    }
};

// Run main
main();
