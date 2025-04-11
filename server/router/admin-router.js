const express = require("express");
const adminControllers = require("../controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

router.route("/users").get(authMiddleware, adminControllers.getAllUsers);
router.route("/contact").get(adminControllers.getAllContact);

module.exports = router;
