import { connect } from "mongoose";
// import { MONGODB_URI } from "./config";


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://angel:<macr1995>@cluster0.y7bmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// const MONGODB_URI = "mongodb+srv://angel:<macr1995>@cluster0.y7bmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

(async () => {
  try {
    const db = await connect(uri);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
