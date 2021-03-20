const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },

  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
});
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
