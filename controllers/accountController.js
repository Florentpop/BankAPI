const AccountModel = require("../models/accountModel");
const BankModel = require("../models/bankModel");
const { validationResult } = require("express-validator");

const handlePostAccount = async (req, res) => {
  const { accountName, accountNumber, accountType, bankId } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return;
    res.status(400).json({ errors: errors.array() });
  }

  try {
    const account = await new AccountModel({
      accountName,
      accountNumber,
      accountType,
      bankId,
    }).save();
    res
      .status(201)
      .json({ message: "Account created succesfully", data: account });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, something went wrong", error: error });
  }
};

const handleGetAccount = async (req, res) => {
  if (!account) {
    return res.json({ message: "Account does not exist" });
  }
  try {
    const accounts = await AccountModel.find({}).populate("bankId");
    res.status(200).json(accounts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry, something went wrong", error: error });
  }
};

module.exports = { handlePostAccount, handleGetAccount };
