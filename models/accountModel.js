const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountSchema = new Schema({
  accountName: { type: String, required: true },
  accountType: { type: String, required: true },
  accountNumber: { type: Number, required: true },
  bankId: { type: Schema.Types.ObjectId, ref: "Bank" },
});

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = AccountModel;
