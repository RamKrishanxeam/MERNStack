// Mongoose का उपयोग करके हम एक User Schema बनाएंगे, जिसमें नाम (name), ईमेल (email),
//  पासवर्ड (password), और तारीख (date) जैसी जानकारी होगी।
const mongoose = require("mongoose");

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

// define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
