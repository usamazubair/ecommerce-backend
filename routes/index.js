var express = require("express");
var router = express.Router();

require("./authentication_routes/authentication_routes")(router);
require("./product_routes/product_routes")(router);
require("./category_routes/category_routes")(router);
require("./upload_routes/upload_routes")(router);

module.exports = router;
