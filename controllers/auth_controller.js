const User = require("../models/user/user");
const user_mapper = require("../models/user/user_mapper");
var bcrypt = require("bcryptjs");
const generatorAccessToken = require("../util/token_generate/access_token");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jovani7@ethereal.email",
    pass: "92hXsFA5HvMgsuCfby",
  },
});

exports.signUp = async (req, res, next) => {
  const { name, email, password, address } = req.body;

  const hashedpassword = await bcrypt.hash(password, 12);

  console.log(email);
  const user = new User({
    [user_mapper.name]: name,
    [user_mapper.email]: email,
    [user_mapper.password]: hashedpassword,
    [user_mapper.address]: address,
  });

  user
    .save()
    .then((result) => {
      transporter.sendMail({
        to: email,
        from: "Shop",
        subject: "Signup Successfully",
        html: "<h1>You successfully signed up </h1>",
      });
      res.status(200).json({ message: "Register Successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "User already in the database" });
    });
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    var result = await User.findOne({ Email: email });

    bcrypt.compare(password, result.Password).then((value) => {
      if (value) {
        const token = generatorAccessToken(email, result._id);
        res.status(200).json({
          user: result,
          token: token,
          message: "Sign In Successfully",
        });
        return;
      }
      res.status(403).json({ message: "Password is incorrect" });
    });
  } catch (e) {
    res.status(404).json({ message: "User not found" });
  }
};
