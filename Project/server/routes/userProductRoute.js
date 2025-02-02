const express = require('express');
const {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/userProductController');

const router = express.Router();

// Route to create a new product
router.post('/', createProduct);

// Route to get all products
router.get('/', getAllProducts);

// Route to get a product by its ID
router.get('/:id', getProductById);

// Route to update a product by its ID
router.put('/:id', updateProduct);

// Route to delete a product by its ID
router.delete('/:id', deleteProduct);

module.exports = router;
