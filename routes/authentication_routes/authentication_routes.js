const userController = require("../../controllers/auth_controller");

module.exports = (router) => {
  router.post("/login", userController.signIn);

  router.post("/register", userController.signUp);
};
