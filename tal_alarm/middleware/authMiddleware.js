const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Get the token from the authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(401); // if there's no token, return 401 Unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // if token is not valid, return 403 Forbidden
        req.user = user; // if valid, save the decoded token user payload to request object
        next(); // continue to the next middleware or route handler
    });
};

module.exports = { authenticateToken };
