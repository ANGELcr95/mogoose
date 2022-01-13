import { connect } from "mongoose";
// import { MONGODB_URI } from "./config";
const MONGODB_URI = "mongodb+srv://angel:<macr1995>@cluster0.y7bmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
