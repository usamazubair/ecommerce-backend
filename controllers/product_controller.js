const Product = require("../models/product/product");
const product_mapper = require("../models/product/product_mapper");

exports.getProducts = async (req, res, next) => {
  try {
    var result = await Product.find();
    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
};

exports.addProduct = async (req, res, next) => {
  const { name, quantity, price, color, brand } = req.body;
  const { email, id } = req.result;

  const product = new Product({
    [product_mapper.name]: name,
    [product_mapper.quantity]: quantity,
    [product_mapper.price]: price,
    [product_mapper.color]: color,
    [product_mapper.brand]: brand,
    [product_mapper.userId]: id,
    [product_mapper.userEmail]: email,
  });

  product
    .save()
    .then((result) => {
      res.status(200).json({ response: result, message: "Product Added" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Product Failed to add" });
    });
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndRemove(req.body.id);
    res.status(200).json({ message: "Delete Successfully" });
  } catch (e) {
    console.log(e);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    var response = await Product.findByIdAndUpdate(req.body.id, {
      ...req.body.updateData,
    });

    res.status(200).json({ message: "Updated Successfully" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "Not Updated" });
  }
};
