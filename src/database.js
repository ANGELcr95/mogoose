import { connect } from "mongoose";
// import { MONGODB_URI } from "./config";
// const MONGODB_URI = "mongodb+srv://angel:<macr1995>@cluster0.y7bmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const MONGODB_URI = "mongodb+srv://miguel:<macr1995>@cluster0.gqzcy.mongodb.net/segundomongoapp?retryWrites=true&w=majority"


// const mongoose = require('mongoose');

// const usuario = "usuariodb"
// const password = "passdb"
// const dbName = "veterinaria"

// const uri = `mongodb+srv://${usuario}:${password}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(()=> console.log('conectado a mongodb')) 
//   .catch(e => console.log('error de conexión', e))


(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
