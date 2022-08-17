var express = require('express');
var router = express.Router();

require('./authentication_routes/authentication_routes')(router);

module.exports = router;