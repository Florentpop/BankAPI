const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv/config");
const mongoose = require("mongoose");
const router = require("./routes/bankRoute");

//create your sever instance
const server = express();

//DB

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log(er.message);
    console.log("Database Connected");
  }
);

// Define controllers

// Define middlewares
server.use(bodyParser.json());
server.use(router);

//Define routes

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running");
});
