var verifyToken = require("../../util/verify_token/verify_token");
const paymentController = require("../../controllers/paymentController");

module.exports = (router) => {
    router.post("/payment", verifyToken, paymentController.addPayments);
  };