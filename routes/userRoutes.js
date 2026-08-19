import express from "express";
import { loginUser, registerUser } from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.get("/login-user", loginUser);

export default userRouter;
