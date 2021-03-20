const BankModel = require("../models/bankModel");
const AccountModel = require("../models/accountModel");

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
  const { id } = req.params;

  if (id) {
    BankModel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  } else {
    try {
      const banks = await Bank.find({});
      if (!banks) return res.status(404).json({ message: "No banks found" });
      res.json(banks);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Sorry somethng went wrong", error: error });
    }
  }
};

const handleUpdateBank = async (req, res) => {
  const { _id, name, address, location, phone, accountNumber } = req.body;

  BankModel.findById(_id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.address = address;
        bank.location = location;

        bank.phone = phone;
        bank.accountNumber = accountNumber;

        bank.save();

        res.json({ message: "update successful", data: bank });
      }
      res.json({ message: "Document cannot be found" });
    })
    .catch((err) => console.log(err));

  //const updatedBank = await BankModel.update({
  // name,
  //address,
  //location,
  //phone,
  //ccountNumber,
  //});
  //res.json({ message: "update successful", data: updatedBank });
};

const handleDeleteBank = async (req, res) => {
  try {
    const { id } = await req.body;
    BankModel.findByIdAndRemove(id);
    res.json({ message: "bank deleted", data: bank });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", data: error.message });
  }
};

module.exports = {
  handlePostBank,
  handleUpdateBank,
  handleDeleteBank,
  handleGetBank,
};
