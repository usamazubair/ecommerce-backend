const orderController = require("../../controllers/order_controller");
var verifyToken = require("../../util/verify_token/verify_token");

module.exports = (router) => {
  router.get("/order", verifyToken, orderController.getOrder);
  router.post("/order", verifyToken, orderController.addOrder);
  router.put("/order", verifyToken, orderController.updateOrder);
};
