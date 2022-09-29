const httpStatusCode = require("../httpStatusCodes/httpStatusCodes");
const BaseError = require("../baseError/baseError");

class Api401Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.UNAUTHORIZED,
    description = "Un Authorized.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

class Api404Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCode.NOT_FOUND,
    description = "Not Found",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = { Api401Error, Api404Error };
