const express = require('express');
const {
  userSignup,
  userLogin,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  authenticateToken,
} = require('../controllers/userAuthController'); 

const router = express.Router();

// Auth routes
router.post('/signup', userSignup);
router.post('/login', userLogin);

// User CRUD routes (protected)
router.get('/:id', authenticateToken, getUserById);
router.get('/', authenticateToken, getAllUsers);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
