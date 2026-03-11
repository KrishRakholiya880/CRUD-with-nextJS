// Express
const express = require("express");
// Product Controller
const authController = require("./auth.controller");
// validation
const validate = require("../../middleware/validation");
// Schema
const validateSchema = require("./auth.validation");
// Router
const router = express.Router();

// routes
router
  .route("/signup")
  .post(validate(validateSchema.signup), authController.signUp);
router
  .route("/signin")
  .post(validate(validateSchema.signin), authController.signIn);
router
  .route("/renew-access-token")
  .post(validate(validateSchema.renewAccessToken), authController.renewToken);

module.exports = router;
