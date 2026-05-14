const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function register(req, res) {
    const { username, email, password, role = 'user' } = req.body;
    const isUserAlreadyRegistered = await userModel.findOne({ 
        $or: [
            { username },
            { email }
        ]
    });

    if (isUserAlreadyRegistered) {  
        return res.status(400).json({ message: 'Username or email already exists' });
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = new userModel({ username, email, password: hash, role });
    await newUser.save();

    const token = jwt.sign({
        id: newUser._id,
        username: newUser.username,
        role: newUser.role
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.status(201).json({ 
        message: 'User registered successfully',
        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    });
}

async function login(req, res) {
    const { username, email, password } = req.body;
}

module.exports = { register };



    