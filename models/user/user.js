const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user_mapper = require("./user_mapper");

const userSchema = new Schema({
  [user_mapper.name]: String,
  [user_mapper.email]: {
    type: String,
    required: true,
    unique: true,
  },
  [user_mapper.password]: String,
  [user_mapper.address]: String,
  [user_mapper.role]: { type: Number, default: 2 },
});

module.exports = mongoose.model("User", userSchema);
