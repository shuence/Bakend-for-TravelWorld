import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    User.findById(userId, (err, user) => {
      if (err || !user) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.user = user;

      next();
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const verifyUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied' });
  }
};

export const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied' });
  }
};

export default verifyToken;
