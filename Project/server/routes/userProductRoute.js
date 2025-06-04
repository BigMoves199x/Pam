const express = require('express');
const {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/userProductController');

const { authenticateToken } = require('../controllers/userAuthController');


const router = express.Router();

// Create a new product (must be logged in)
router.post('/', authenticateToken, createProduct);

// Get all products for the logged-in user
router.get('/', authenticateToken, getAllProducts);

// Get a product by ID (for the logged-in user)
router.get('/:id', authenticateToken, getProductById);

// Update a product by ID
router.put('/:id', authenticateToken, updateProduct);

// Delete a product by ID
router.delete('/:id', authenticateToken, deleteProduct);


module.exports = router;
