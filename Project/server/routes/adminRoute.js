const express = require('express');
const { login } = require('../controllers/adminAuthController'); // Import both login and signup controllers
const router = express.Router();

// Admin login route
router.post('/login', login);

/* // Admin signup route
router.post('/signup', signup); */

module.exports = router;
