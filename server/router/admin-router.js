const express = require("express");
const adminControllers = require("../controllers/admin-controllers");

const router = express.Router();

router.route("/users").get(adminControllers.getAllUsers);
router.route("/contact").get(adminControllers.getAllContact);

module.exports = router;
