import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/usersControllers.js";
import { isAuthenticatedUser } from "../utils/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register-user", registerUser); //User Route
userRouter.get("/login-user", loginUser); //User Route
userRouter.get("/get-user-profile/:id", isAuthenticatedUser, getUserProfile); //middleware isAuthenticatedUser
userRouter.get("/get-all-users", isAuthenticatedUser, getAllUsers); //Admin route
userRouter.patch(
  "/update-user-profile/:id",
  isAuthenticatedUser,
  updateUserProfile,
); //User can update their profile
userRouter.delete("/delete-user/:id", isAuthenticatedUser, deleteUser); //Admin Route

export default userRouter;
