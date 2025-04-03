const express = require("express");
const contactForm = require("../controllers/contact-controllers");
const validate = require("../middleware/validation-middleware");
const contactSchema = require("../validators/contact-valdator");

const router = express.Router();

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;
