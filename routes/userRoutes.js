import express from "express";
import {
  getAllUsers,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.get("/login-user", loginUser);
userRouter.get("/get-user-profile/:id", getUserProfile);
userRouter.get("/get-all-users", getAllUsers);
userRouter.patch("update-user-profile/:id", updateUserProfile);

export default userRouter;
