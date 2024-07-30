const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/Auth');
const {fetchAllHoldings , fetchAllPositions} = require('../controllers/Auth');
// User routes
router.post('/signup', signup);
router.post('/login', login);


// Holdings routes
router.get('/allHoldings', fetchAllHoldings);

// Positions routes
router.get('/allPositions', fetchAllPositions);

module.exports = router;