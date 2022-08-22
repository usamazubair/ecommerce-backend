const categoryController = require("../../controllers/category_controller");
var verifyToken = require("../../util/verify_token/verify_token");

module.exports = (router) => {
  router.get("/category", verifyToken, categoryController.getCategory);
  router.post("/category", verifyToken, categoryController.addCategory);
  router.delete("/category", verifyToken, categoryController.deleteCategory);
  router.put("/category", verifyToken, categoryController.updateCategory);
};
