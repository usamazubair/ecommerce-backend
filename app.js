const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const allRoutes = require("./routes");
const fs = require("fs");
const mongoose = require("mongoose");
const secret = String(require("crypto").randomBytes(64).toString("hex"));
const fileUpload = require("express-fileupload");
const basePath = __dirname;

// const mongoConnect = require("./util/database");

// fs.writeFileSync('.env',`TOKEN_SECRET=${secret}`)

app.use(fileUpload());

app.use("/", express.static("public"));

app.use("/shopify", allRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

mongoose
  .connect(
    "mongodb+srv://usama:UJQpA3Vf30Wc9aSZ@cluster0.ipbl6ku.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });

exports.basePath = basePath;
