const mongoose = require("mongoose");
const { Schema } = mongoose;

const bankSchema = new Schema({
  name: String,
  branch: String,
  location: String,
  phone: String,
  address: String,
  accountNumber: Number,
});
const BankModel = mongoose.model("Bank", bankSchema);

module.exports = BankModel;

/*let banksDB = [];

//define  Model
class BankModel {
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

module.exports = BankModel;*/
