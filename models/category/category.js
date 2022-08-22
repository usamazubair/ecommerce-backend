const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const category_mapper = require("./category_mapper");

const categorySchema = new Schema({
  [category_mapper.name]: {
    type: String,
    required: true,
    unique: true,
  },
  [category_mapper.country]: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
