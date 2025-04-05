require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// app.use(express.json());  इस लाइन का उपयोग Express.js में JSON
// डेटा को पार्स करने के लिए किया जाता है। जब कोई क्लाइंट (जैसे React, Postman, या कोई अन्य API उपभोक्ता)
// JSON फॉर्मेट में डेटा भेजता है, तो यह मिडलवेयर उसे पार्स करके req.body में उपलब्ध कराता है।
// इस require("dotenv").config(); लाइन का उपयोग Node.js में .env फ़ाइल से पर्यावरण चर (environment variables) लोड करने के लिए किया जाता है।

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;
const crosOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(crosOptions));

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
