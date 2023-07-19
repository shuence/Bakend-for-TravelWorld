// userController.js

import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to get users" });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to get user" });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};

export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
