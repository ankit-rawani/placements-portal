import jwt from 'jsonwebtoken';

// Checking if the user is an admin or an authenticated user and setting req.admin and/or req.user
const auth = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res
            .status(403)
            .json({ message: 'A token is required for authentication' });
    }

    if (req.user) delete req.user;

    const token = req.headers['authorization'].replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized Access' });
    }

    return next();
};

export default auth;
