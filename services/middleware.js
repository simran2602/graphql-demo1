const jwt = require('jsonwebtoken');
const userModel = require("../models/user");

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(400).json({ error: 'No token provided' });
    }
    try {
        let decode = jwt.decode(token, process.env.JWT_SECRET)
        let user = await userModel.findById(decode._id)
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Failed to authenticate token' });
    }
}

module.exports = { authenticate };