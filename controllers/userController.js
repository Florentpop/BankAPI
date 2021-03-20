const UserModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const handleCreateUser = async (req, res) => {
  const { userName, email, password } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var salt = bcrypt.genSaltSync(10);
  var hashPass = bcrypt.hashSync(password, salt);
  // Store hash in your password DB.

  try {
    const user = await new UserModel({
      userName,
      email,
      password: hashPass,
    }).save();
    res
      .status(201)
      .json({
        message: "User created successfully",
        data: { userName, email },
      });
  } catch (error) {
    res.status(500).json({ message: "Sorry, something went wrong", error });
  }
};

module.exports = {
  handleCreateUser,
};
