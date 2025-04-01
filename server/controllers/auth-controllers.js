// Controllers Express.js में MVC (Model-View-Controller) आर्किटेक्चर का एक महत्वपूर्ण हिस्सा होते हैं।
// ये बिजनेस लॉजिक को हैंडल करते हैं और क्लाइंट से आने वाले रिक्वेस्ट (Request) और रिस्पॉन्स (Response) को मैनेज करते हैं।

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
    res.status(200).send({ message: req.body });
  } catch (error) {
    res.status(400).send("page not found");
  }
};

module.exports = { home, registerUser };
