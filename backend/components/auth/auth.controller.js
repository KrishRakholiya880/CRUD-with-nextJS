const authService = require("./auth.service");

const signUp = async (req, res, next) => {
  try {
    const result = await authService.signUp(req.body);

    return res.status(201).json({
      success: "Signup Successful!!!",
      ...result,
    });
  } catch (error) {
    console.error("Error While Creating User: ", error);
    return next(error);
    // if (error.message.includes("Email already registered")) {
    //   return res.status(400).json({ error: error.message });
    // }
    // return res.status(500).json({ error: "Failed to Create New User!!!" });
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password" });
    }

    const result = await authService.signIn(email, password);

    return res.status(200).json({
      success: "Login Successful!!!",
      ...result,
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return next(error);
    // Return 401 for authentication failures
    // if (error.message === "Invalid Email or Password") {
    //   return res.status(401).json({ error: error.message });
    // }
    // return res.status(500).json({ error: "Internal Server Error" });
  }
};

const renewToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res
        .status(400)
        .json({ error: "Refresh token is required in body" });
    }

    const result = await authService.renewAccessToken(refreshToken);

    return res.status(200).json({
      success: "Token Renewed",
      ...result,
    });
  } catch (error) {
    console.log("Error While renewToken: ", error);
    return next(error);
  }
};

module.exports = {
  signUp,
  signIn,
  renewToken,
};
