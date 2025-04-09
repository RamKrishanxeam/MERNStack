// Router Express.js में एक मॉड्यूल होता है जो HTTP रिक्वेस्ट (Request) को हैंडल करता है
//  और रूट्स (Routes) को मैनेज करने में मदद करता है। यह URL को ऑर्गनाइज़ करने और कोड को साफ-सुथरा रखने में मदद करता है।

const express = require("express");
const authcontrollers = require("../controllers/auth-controllers");
const validate = require("../middleware/validation-middleware");
const authMiddleware = require("../middleware/auth-middleware");
const { signupSchema, loginSchema } = require("../validators/user-validator");
const router = express.Router();

router.route("/").get(authcontrollers.home);
router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.registerUser);
router.route("/login").post(validate(loginSchema), authcontrollers.loginUser);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
