import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/usersControllers.js";
import { isAdmin, isAuthenticatedUser } from "../utils/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register-user", registerUser); //User Route
userRouter.get("/login-user", loginUser); //User Route
userRouter.get("/get-user-profile/:id", isAuthenticatedUser, getUserProfile); //middleware isAuthenticatedUser

//Admin Route : Get All Users from the database
userRouter.get(
  "/get-all-users",
  isAuthenticatedUser,
  isAdmin("admin"),
  getAllUsers,
);

//User Route : User can update their profile info
userRouter.patch(
  "/update-user-profile/:id",
  isAuthenticatedUser,
  updateUserProfile,
);

//Admin Route : Admin can delete user from the database
userRouter.delete(
  "/delete-user/:id",
  isAuthenticatedUser,
  isAdmin("admin"),
  deleteUser,
);

export default userRouter;
