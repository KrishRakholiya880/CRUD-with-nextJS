// Express
const express = require("express");
// Product Controller
const authController = require("./auth.controller");
// validation
const validate = require("../../middleware/validation");
// Schema
const authValidateSchema = require("./auth.validation");
// Router
const router = express.Router();

// routes
router
  .route("/signup")
  .post(validate(authValidateSchema.signup), authController.signUp);
router
  .route("/signin")
  .post(validate(authValidateSchema.signin), authController.signIn);
router.route("/logout").post(authController.logout);
router.route("/renew-access-token").post(authController.renewAccessToken);

module.exports = router;
