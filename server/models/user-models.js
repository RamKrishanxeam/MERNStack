// Mongoose का उपयोग करके हम एक User Schema बनाएंगे, जिसमें नाम (name), ईमेल (email),
//  पासवर्ड (password), और तारीख (date) जैसी जानकारी होगी।
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Secure User Password using Bcrypt.js
// Mongoose में pre("save", callback) एक middleware (हुक) है, जो डेटा डेटाबेस में सेव (save) होने से पहले चलाया जाता है।
// इसका उपयोग पासवर्ड हैशिंग (encryption), डेटा वेरिफिकेशन, या अन्य लॉजिक जोड़ने के लिए किया जाता है।

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    // 2️⃣ Hash the password (for security)
    // bcrypt.genSalt() पासवर्ड हैशिंग के लिए एक सुरक्षा परत (security layer) जोड़ने का काम करता है।

    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
