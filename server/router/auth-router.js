// Router Express.js में एक मॉड्यूल होता है जो HTTP रिक्वेस्ट (Request) को हैंडल करता है
//  और रूट्स (Routes) को मैनेज करने में मदद करता है। यह URL को ऑर्गनाइज़ करने और कोड को साफ-सुथरा रखने में मदद करता है।

const express = require("express");
const authcontrollers = require("../controllers/auth-controllers");
const router = express.Router();

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.registerUser);
router.route("/login").post(authcontrollers.loginUser);

// router.route("/register").get((req, res) => {
//   res.status(200).send("register");
// });

module.exports = router;
