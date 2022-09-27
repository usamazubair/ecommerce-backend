const httpStatusCode = require("../httpStatusCodes/httpStatusCodes");
const BaseError = require("../baseError/baseError");

class Api404Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.NOT_FOUND,
    description = "Not found.",
    isOperational = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}

module.exports = Api404Error;
