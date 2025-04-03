// Express.js में Error Handling का मतलब है कि अगर कोड में कोई एरर आए तो उसे सही तरीके से मैनेज किया जाए
// ताकि सर्वर क्रैश न हो और यूज़र को सही मैसेज मिले।

const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "Error from Backend";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
