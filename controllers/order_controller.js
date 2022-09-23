const Order = require("../models/order/order");
const order_mapper = require("../models/order/order_mapper");

exports.addOrder = async (req, res, next) => {
  const { cartId, shippingDetail, paymentOption } = req.body;

  const { id } = req.result;

  const order = new Order({
    [order_mapper.cartId]: cartId,
    [order_mapper.shippingDetail]: shippingDetail,
    [order_mapper.userId]: id,
    [order_mapper.paymentOption]: paymentOption,
  });

  order
    .save()
    .then((result) => {
      res.status(200).json({
        message: "You Have successfully order",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "order Failed to add" });
    });
};

exports.getOrder = async (req, res, next) => {
  try {
    var result = await Order.find().populate({
      path: "CartId",
    });

    console.log(result);
    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
};
