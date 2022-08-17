const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://usama:UJQpA3Vf30Wc9aSZ@cluster0.ipbl6ku.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      database = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};


const getDB = () => {
  if(database) {
    return database;
  }

  throw "No Database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;