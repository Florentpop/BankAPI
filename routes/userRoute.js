const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");
const { handleCreateUser } = require("../controllers/userController");

const { body } = require("express-validator");

router.post(
  "/user",
  [
    body("userName").notEmpty().withMessage("userName is required"),

    body("email")
      .isEmail()
      .withMessage("valid Email is required")
      .custom((value, { req }) => {
        return UserModel.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-mail already in use");
          }
        });
      }),
    body("password")
      .isLength({ min: 6, max: 12 })
      .withMessage("Password must be 6 characters"),
  ],
  handleCreateUser
);

module.exports = router;
