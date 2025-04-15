const User = require("../models/user-models");
const Contact = require("../models/contact-models");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select({
      password: 0,
    });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.log(`user ${error}`);
  }
};

const getAllContact = async (req, res) => {
  try {
    const contact = await Contact.find();

    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No contact found" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    res.status(500).json({ message: "Error contact user", error });
  }
};

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "UserID not found" });
    }
    const data = await User.findOne({ _id: id }).select({ password: 0 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error UserID user", error });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.deleteOne({ _id: id });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updateUser = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "Error update user", error });
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Contact not found" });
    }
    await Contact.deleteOne({ _id: id });
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact", error });
  }
};

module.exports = {
  getAllUsers,
  getAllContact,
  deleteUserById,
  getUsersById,
  updateUserById,
  deleteContactById,
};
