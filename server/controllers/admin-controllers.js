const User = require("../models/user-models");

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
module.exports = getAllUsers;
