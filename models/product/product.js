const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const product_mapper = require("./product_mapper");

const productSchema = new Schema({
  [product_mapper.name]: {
    type: String,
    required: true,
    unique: true,
  },
  [product_mapper.quantity]: {
    type: Number,
    required: true,
  },
  [product_mapper.price]: {
    type: Number,
    required: true,
  },
  [product_mapper.color]: {
    type: String,
    required: true,
  },
  [product_mapper.brand]: { type: String, required: true },
  [product_mapper.userId]: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  [product_mapper.categoryId]: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  [product_mapper.imagePath]: { type: String, required: true },
  [product_mapper.userEmail]: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
