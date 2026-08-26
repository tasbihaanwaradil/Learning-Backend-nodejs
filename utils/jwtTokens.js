export const sendTokenJWT = (user, statusCode, res) => {
  const token = user.getJWT();

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 1000),
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};
