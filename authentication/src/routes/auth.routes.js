const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', authController.register);

router.get("/test", (req, res) => {
    res.json({ message: "Test route is working!", cookies: req.cookies });
});


module.exports = router;