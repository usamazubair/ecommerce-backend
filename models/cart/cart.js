const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cart_mapper = require("./cart_mapper");

const cartSchema = new Schema({
  [cart_mapper.userId]: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Products: [
    {
      [cart_mapper.productId]: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      [cart_mapper.quantity]: {
        type: String,
        required: true,
      },
    },
  ],
  [cart_mapper.complete]: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
