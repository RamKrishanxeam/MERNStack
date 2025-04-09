const Service = require("../models/service-model");

const ServiceData = async (req, res) => {
  try {
    const response = req.body;
    await Service.create(response);
    return res.status(201).json({ message: "Service send successfull" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error. Could not create service" });
  }
};

const getService = async (req, res) => {
  try {
    const response = await Service.find();

    if (!response) {
      return res.status(401).json({ message: "No service found" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    console.log(`services ${error}`);
  }
};

module.exports = { ServiceData, getService };
