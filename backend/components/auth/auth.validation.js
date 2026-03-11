const Joi = require("joi");

const signup = {
  body: Joi.object({
    username: Joi.string().required().messages({
      "string.empty": "Username cannot be empty.",
      "any.required": "Username is required.",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email cannot be empty.",
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
    }),
    password: Joi.string().min(6).max(12).required().messages({
      "string.empty": "Password cannot be empty.",
      "any.required": "Password is required.",
      "string.min": "Password must be at least 6 characters long.",
      "string.max": "Password cannot exceed 12 characters.",
    }),
  }),
};
const signin = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.empty": "Email cannot be empty.",
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password cannot be empty.",
      "any.required": "Password is required.",
    }),
  }),
};
const renewAccessToken = {
  body: Joi.object({
    refreshToken: Joi.string().required().messages({
      "string.empty": "RefreshToken cannot be empty.",
      "any.required": "RefreshToken is required.",
    }),
  }),
};

module.exports = {
  signup,
  signin,
  renewAccessToken,
};
