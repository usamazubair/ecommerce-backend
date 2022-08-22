const productController = require("../../controllers/product_controller");
var verifyToken = require("../../util/verify_token/verify_token");

module.exports = (router) => {
  router.get("/products", verifyToken, productController.getProducts);
  router.post("/products", verifyToken, productController.addProduct);
  router.delete("/products", verifyToken, productController.deleteProduct);
  router.put("/products", verifyToken, productController.updateProduct);
};
