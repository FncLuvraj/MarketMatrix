const bcrypt = require('bcrypt');
const User = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const HoldingsModel = require('../models/HoldingsModel'); 
const PositionsModel = require('../models/PositionsModel');

require('dotenv').config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check if any field is empty
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password and confirm password do not match' });
        }

        // Hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating new user
        await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: 'User created successfully' });
    } catch (e) {
        console.error('Server Error', e);
        return res.status(500).json({ message: 'Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if data is present
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user exists in the database
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        // Compare hashed password with provided password
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const payload = {
            email: userExist.email,
            id: userExist._id
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
            httpOnly: true
        };

        // Set cookie and return response
        res.cookie('token', token, options);
        return res.status(200).json({ message: 'Login successful', token });
    } catch (e) {
        console.error('Server Error', e);
        return res.status(500).json({ message: 'Server Error', error: e.message });
    }
};
exports.fetchAllHoldings = async (req, res) => {
     try {
         const allholdings = await HoldingsModel.find({});
         res.json(allholdings);
     } catch (e) {
         console.error('Server Error', e);
         return res.status(500).json({ message: 'Server Error' });
     }
 };



exports.fetchAllPositions = async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (e) {
        console.error('Server Error', e);
        return res.status(500).json({ message: 'Server Error' });
    }
};