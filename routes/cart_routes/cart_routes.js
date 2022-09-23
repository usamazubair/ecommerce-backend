const cartController = require("../../controllers/cart_controller");
var verifyToken = require("../../util/verify_token/verify_token");

module.exports = (router) => {
  router.post("/cart", verifyToken, cartController.addCart);
  router.get("/cart", verifyToken, cartController.getCart);
};
