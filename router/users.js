import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRoute = express.Router();

userRoute.post("/", verifyAdmin, createUser);

userRoute.get("/", verifyAdmin, getAllUsers);

userRoute.get("/:id", verifyUser, getUserById);

userRoute.put("/:id", verifyUser, updateUser);

userRoute.delete("/:id", verifyUser, deleteUser);

export default userRoute;
