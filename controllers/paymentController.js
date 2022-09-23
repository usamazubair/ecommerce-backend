const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.addPayments = async (req, res, next) => {
  console.log(req.body);
  // let {amount, id} = req.body
  try {
    // stripe.checkout,
    const payment = await stripe.paymentIntents.create({
      amount: "200",
      currency: "USD",
      description: "User Checkout",
    //   payment_medhod: id,
      confirm: true,
    });

    console.log(payment);
  } catch (error) {
    console.log(error);
  }
};
