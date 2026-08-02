const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("App started");
});
