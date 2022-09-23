const cart = require("../models/cart/cart");
const Cart = require("../models/cart/cart");
const cart_mapper = require("../models/cart/cart_mapper");

exports.addCart = async (req, res, next) => {
  const { productId, Quantity } = req.body;
  const { id } = req.result;

  try {
    const result = await Cart.findOneAndUpdate(
      { [cart_mapper.userId]: { $eq: id } },
      {
        $push: {
          Products: [
            {
              [cart_mapper.quantity]: Quantity,
              [cart_mapper.productId]: productId,
            },
          ],
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    res
      .status(200)
      .json({ response: result, message: "Product Added to Cart" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Product Failed to add" });
  }
};

exports.getCart = async (req, res, next) => {
  const { id } = req.result;

  try {
    var result = await Cart.find({
      [cart_mapper.userId]: id,
      [cart_mapper.complete]: false,
    }).populate("Products.ProductId");

    res.status(200).json({ data: result[0], message: "Success" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "Cannot Find" });
  }
};
