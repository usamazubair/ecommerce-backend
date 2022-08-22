var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ");

  if (token[0] === "Bearer" && token[1]) {
    try {
      var result = jwt.verify(token[1], process.env.TOKEN_SECRET);
      req.result = result;
      next();
    } catch (e) {
      res.status(400).json({ message: "User is not authorized" });
    }
  }
};
