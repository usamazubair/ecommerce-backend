const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const order_mapper = require("./order_mapper");

const orderSchema = new Schema({
  [order_mapper.userId]: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  [order_mapper.cartId]: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  [order_mapper.paymentOption]: {
    type: String,
    required: true,
  },
  [order_mapper.shippingDetail]: {
    type: Object,
    required: true,
  },
  [order_mapper.proceed]: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);
