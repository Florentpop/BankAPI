const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv/config");
const mongoose = require("mongoose");

const bankRouter = require("./routes/bankRoute");
const accountRouter = require("./routes/accountRoute");
const userRouter = require("./routes/userRoute");

//create your sever instance
const server = express();

//DB

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) return console.log(er.message);
    console.log("Database Connected");
  }
);

// Define controllers

// Define middlewares
server.use(bodyParser.json());

//Define routes
server.use(bankRouter);
server.use(accountRouter);
server.use(userRouter);

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running");
});
