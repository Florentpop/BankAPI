const Bank = require("../models/bankModel");

const handlePostBank = async (req, res) => {
  const { name, address, location, phone, accountNumber } = req.body;
  const bank = await new Bank({
    name,
    address,
    location,
    phone,
    accountNumber,
  }).save();
  console.log("bank", bank);
  res.status(201).json({ message: "Bank created successfully", data: bank });
};

const handleGetBank = async (req, res) => {
  try {
    const banks = await Bank.find({});
    if (!banks) return res.status(404).json({ message: "No banks found" });
    res.json(banks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Sorry somethng went wrong", error: error });
  }
};

const handleUpdateBank = async (req, res) => {
  const { name, address, location, phone, accountNumber } = req.body;

  const updatedBank = await BankModel.update({
    name,
    address,
    location,
    phone,
    accountNumber,
  });
  res.json({ message: "update successful", data: updatedBank });
};

const handleDeleteBank = async (req, res) => {
  const { name } = req.body;
  const deletedBank = await BankModel.delete({ name });
  res.json({ message: "bank deleted", data: deletedBank });
};

module.exports = {
  handlePostBank,
  handleUpdateBank,
  handleDeleteBank,
  handleGetBank,
};
