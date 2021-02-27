const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/bankRoute");

//create your sever instance
const server = express();

mongoose.connect(
  "mongodb+srv://Flo:Flo123456@cluster0.lxrtj.mongodb.net/bank1?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//DB

// Define controllers

// Define middlewares
server.use(bodyParser.json());
server.use(router);

//Define routes

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running");
});
