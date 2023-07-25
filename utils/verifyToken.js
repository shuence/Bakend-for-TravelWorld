import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const errorHandler = (res, statusCode, message) => {
  return res.status(statusCode).json({ message });
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return errorHandler(res, 401, 'No token provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id; // Use _id as userId

    // Fetch the user from the database using the userId (_id)
    const user = await User.findById(userId);

    if (!user) {
      return errorHandler(res, 401, 'Invalid token');
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return errorHandler(res, 401, 'Invalid token');
  }
};

export const verifyUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    next();
  } else {
    return errorHandler(res, 403, 'Access denied');
  }
};

export const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return errorHandler(res, 403, 'Access denied');
  }
};

export default verifyToken;
