const jwt = require("jsonwebtoken");
const User = require("../models/user-models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authentication");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP ,Token not provided ." });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isverfied = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);
    const userData = await User.findOne({ email: isverfied.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized ,Invalid token" });
  }
};

module.exports = authMiddleware;
