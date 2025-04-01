const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
