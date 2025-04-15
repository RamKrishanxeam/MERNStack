const express = require("express");
const adminControllers = require("../controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminControllers.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminControllers.getUsersById);

router.route("/contact").get(adminControllers.getAllContact);
router
  .route("/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById);

module.exports = router;
