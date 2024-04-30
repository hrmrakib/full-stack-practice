const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

const data = require("./data.json");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("db connected successfully!");
  } catch (error) {
    console.log("database is not connected!");
  }
};

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, async () => {
  console.log(`Server is running on ${port}`);
  await dbConnect();
});
