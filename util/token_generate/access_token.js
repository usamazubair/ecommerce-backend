var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const tokenGenerator = (email) => {
  dotenv.config();
  return jwt.sign(
    {
      email: email,
    },
    process.env.TOKEN_SECRET
  );
};
module.exports = tokenGenerator;
