// Controllers Express.js में MVC (Model-View-Controller) आर्किटेक्चर का एक महत्वपूर्ण हिस्सा होते हैं।
// ये बिजनेस लॉजिक को हैंडल करते हैं और क्लाइंट से आने वाले रिक्वेस्ट (Request) और रिस्पॉन्स (Response) को मैनेज करते हैं।
const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

// बिजनेस लॉजिक वह नियम और प्रोसेस होते हैं, जो यह तय करते हैं कि डेटा को कैसे प्रोसेस और मैनेज किया जाए। उदाहरण के लिए:
// यूज़र रजिस्ट्रेशन पर ईमेल वेरिफिकेशन भेजना।
// यूज़र लॉगिन पर पासवर्ड वेरिफिकेशन और टोकन जनरेशन।
// किसी प्रोडक्ट की कीमत डिस्काउंट के आधार पर बदलना।
// Sending email verification when a user registers.
// Validating passwords and generating tokens during login.
// Applying discounts to product prices based on conditions.

const home = async (req, res) => {
  try {
    res.status(200).send("home page");
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    // 1️⃣ Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({
      // user: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
      message: "Your account has been created successfully.",
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
        message: "You have successfully logged in.",
      });
    } else {
      res
        .status(401)
        .json({ message: "Login failed. Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
module.exports = { home, registerUser, loginUser };
