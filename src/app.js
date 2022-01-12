import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

// la configugracion de motor de plantilla
app.set("views", path.join(__dirname, "views")); // este e spara poder localzar de una vez la carpeta de views relaciona la ruta con el string al comienzode la funcion

app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")))

export default app;
