var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const tokenGenerator = (email, id) => {
  dotenv.config();
  return jwt.sign(
    {
      email: email,
      id: id,
    },
    process.env.TOKEN_SECRET
  );
};
module.exports = tokenGenerator;
