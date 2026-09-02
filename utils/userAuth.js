//protected routes
//role based access
import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";

export const isAuthenticatedUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "please login first",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
