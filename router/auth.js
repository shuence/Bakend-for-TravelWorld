import express from 'express';
import {
  registerUser,
  loginUser,}
  from "../controllers/authController.js"

const authRoute = express.Router();

// Register a new user
authRoute.post('/register', registerUser);

// Login user
authRoute.post('/login', loginUser);

export default authRoute;
