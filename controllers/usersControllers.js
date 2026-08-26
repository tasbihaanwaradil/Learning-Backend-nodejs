import User from "../models/usersModel.js";

//regiester User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, profile } = req.body;

    if (!name || !email || !password || !role || !profile) {
      return res.status(400).json({
        success: false,
        message: "All input filed are required",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      profile,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "There is something wrong",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User successfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while registering the user",
    });
  }
};

//login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All input fields are required",
      });
    }

    //check email
    const userfindByEmail = await User.findOne({ email });

    if (!userfindByEmail) {
      return res.status(500).json({
        success: false,
        message: "User not found",
      });
    }

    //check password
    if (password !== userfindByEmail.password) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
};

//get user profile
export const getUserProfile = async (req, res) => {
  try {
    const findUserById = await User.findById(req.params.id);

    if (!findUserById) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      findUserById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};

//get all users in database
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    if (!allUsers) {
      return res.status(400).json({
        success: false,
        message: "something went wrong",
      });
    }

    return res.status(200).json({
      success: true,
      allUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};

//update user
export const updateUserProfile = async (req, res) => {
  try {
    const getUserById = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!getUserById) {
      return res.staus(400).json({
        success: false,
        message: "user not updated",
      });
    }

    return res.status(200).json({
      success: true,
      message: "user updated successfully",
      getUserById,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
