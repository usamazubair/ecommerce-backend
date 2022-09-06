const uploadController = require("../../controllers/upload_controller");
var verifyToken = require("../../util/verify_token/verify_token");

module.exports = (router) => {
  router.post("/uploadImage", verifyToken, uploadController.uploadImage);
};
