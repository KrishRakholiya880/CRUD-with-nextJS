// auth
const authService = require("./auth.service");

const signUp = async (req, res, next) => {
  try {
    const result = await authService.signUp(req.body);

    const { user, accessToken, refreshToken } = result;

    // New
    // const cookieOptions = {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "Strict",
    // };

    // res.cookie("accessToken", accessToken, {
    //   ...cookieOptions,
    //   maxAge: 15 * 60 * 1000, // 15 mins
    // });
    // res.cookie("refreshToken", refreshToken, {
    //   ...cookieOptions,
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    // });

    // return res.status(201).json({
    //   success: "Signup Successful!!!",
    //   user,
    // });

    // Old
    return res.status(201).json({
      success: "Signup Successful!!!",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Error While Creating User: ", error);
    return next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await authService.signIn(email, password);

    const { user, accessToken, refreshToken } = result;

    // New
    // const cookieOptions = {
    //   httpOnly: true,
    //   // secure: process.env.NODE_ENV === "production",
    //   secure: true,
    //   sameSite: "None",
    // };

    // res.cookie("accessToken", accessToken, {
    //   ...cookieOptions,
    //   maxAge: 15 * 60 * 1000, // 15 mins
    // });
    // res.cookie("refreshToken", refreshToken, {
    //   ...cookieOptions,
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    // });
    // res.cookie("userData", JSON.stringify(user), {
    //   ...cookieOptions,
    // });

    // return res.status(201).json({
    //   success: "Login Successful!!!",
    //   user,
    // });

    // Old
    return res.status(201).json({
      success: "Login Successful!!!",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      throw new Error("TOKEN_REQUIRED");
    }

    await authService.logout(refreshToken);

    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.clearCookie("userData", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const renewAccessToken = async (req, res, next) => {
  try {
    const oldRefreshToken = req.cookies?.refreshToken;

    if (!oldRefreshToken) {
      throw new Error("INVALID_REFRESH_TOKEN");
    }

    const { accessToken, refreshToken } =
      await authService.renewAccessToken(oldRefreshToken);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000, // 15 mins
    });

    return res.status(200).json({
      success: true,
      message: "Token Renewed Successfully",
    });
  } catch (error) {
    console.error("Error While renewToken: ", error.message);
    next(error);
  }
};

module.exports = {
  signUp,
  signIn,
  logout,
  renewAccessToken,
};
