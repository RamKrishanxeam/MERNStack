const express = require("express");
const { ServiceData ,getService } = require("../controllers/service-controllers");

const router = express.Router();

router.route("/add-service").post(ServiceData);
router.route("/service").get(getService);

module.exports = router;
