// auth verification middleware in es6
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authVerify = (req, res, next) => {
    const authToken = req.headers['authorization']?.split(' ')[1];
    if (!authToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

export default authVerify;
