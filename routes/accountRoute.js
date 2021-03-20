const express = require("express");
const router = express.Router();
const {
  //handleDeleteAccount,
  handleGetAccount,
  handlePostAccount,
  // handleUpdateAccount,
} = require("../controllers/accountController");

const { body } = require("express-validator");

router.get("/account", [], handleGetAccount);

router.post(
  "/account",
  [
    body("accountName").notEmpty().withMessage("accountName is required"),
    body("accountNumber")
      .notEmpty()
      .withMessage("accountNumber is required")
      .isNumeric()
      .withMessage("accountNumber has to be a valid number")
      .isLength({ min: 12, max: 12 })
      .withMessage("accountNumber must be 12 characters"),
  ],
  handlePostAccount
);
//router.put("/account", handleUpdateAccount);
//router.delete("/account", handleDeleteAccount);

module.exports = router;
