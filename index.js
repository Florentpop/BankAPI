const express = require("express");
const bodyParser = require("body-parser");

//create your sever instance
const server = express();

//DB

let banksDB = [];

//define  Modal
class BankModal {
  constructor(name, address, location, phone, accountNumber) {
    this.name = name;
    this.address = address;
    this.location = location;
    this.phone = phone;
    this.accountNumber = accountNumber;
  }

  save = () => {
    banksDB.push(this);
    return this;
  };

  static listBanks = () => {
    return banksDB;
  };

  static update(updateInfo = {}) {
    banksDB = banksDB.map((bank) => {
      if (bank.name === updateInfo.name) {
        return { ...bank, ...updateInfo };
      }

      return bank;
    });
  }

  static delete({ name }) {
    let deletedBank = null;
    banksDB = banksDB.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBank = bank;
      return false;
    });

    return deletedBank;
  }
}

// Define controllers

const handlePostBank = (req, res) => {
  const { name, address, location, phone, accountNumber } = req.body;
  const bank = new BankModal(
    name,
    address,
    location,
    phone,
    accountNumber
  ).save();
  res.status(201).json({ message: "Bank created successfully", data: bank });
};

const handleGetBank = (req, res) => {
  const banks = BankModal.listBanks();
  res.status(200).json({ data: banks });
};

const handleUpdateBank = (req, res) => {
  const { name, address, location, phone, accountNumber } = req.body;

  const updatedBank = BankModal.update({
    name,
    address,
    location,
    phone,
    accountNumber,
  });
  res.json({ message: "update successful", data: updatedBank });
};

const handleDeleteBank = (req, res) => {
  const { name } = req.body;
  const deletedBank = BankModal.delete({ name });
  res.json({ message: "bank deleted", data: deletedBank });
};

// Define middlewares
server.use(bodyParser.json());

//Define routes
server.get("/bank", handleGetBank);
server.post("/bank", handlePostBank);
server.put("/bank", handleUpdateBank);
server.delete("/bank", handleDeleteBank);

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running");
});
