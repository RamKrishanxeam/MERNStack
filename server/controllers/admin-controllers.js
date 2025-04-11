const User = require("../models/user-models");
const Contact = require("../models/contact-models");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select({
      password: 0,
    });

    if (!users || users.length === 0) {
      return res.status(401).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.log(`user ${error}`);
  }
};

const getAllContact = async (req, res) => {
  try {
    const contact = await Contact.find();

    if (!contact) {
      return res.status(401).json({ message: "No contact found" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    console.log(`contact ${error}`);
  }
};
module.exports = { getAllUsers, getAllContact };
