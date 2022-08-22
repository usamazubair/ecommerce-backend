const Category = require("../models/category/category");
const category_mapper = require("../models/category/category_mapper");

exports.getCategory = async (req, res, next) => {
  try {
    var result = await Category.find();
    res.status(200).json({ data: result });
  } catch (e) {
    console.log(e);
  }
};

exports.addCategory = async (req, res, next) => {
  const { name, country } = req.body;

  const category = new Category({
    [category_mapper.name]: name,
    [category_mapper.country]: country,
  });

  category
    .save()
    .then((result) => {
      res.status(200).json({ response: result, message: "Category Added" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Category Failed to add" });
    });
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove(req.body.id);
    res.status(200).json({ message: "Delete Successfully" });
  } catch (e) {
    console.log(e);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndUpdate(req.body.id, {
      ...req.body.updateData,
    });

    res.status(200).json({ message: "Updated Successfully" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "Not Updated" });
  }
};
