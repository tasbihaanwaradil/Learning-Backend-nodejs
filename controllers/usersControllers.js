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
