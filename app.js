const express = require("express"); //modulo
const path = require("path"); //modulo
const urlapis = require("./routes/urlapis"); //ruta de las apis
const router = require("./routes/"); //ruta de la pagina (url)
var app = express();
require("dotenv").config();

// configuraciones
const port = process.env.port || 8080;
app.set("port", port);
app.set("json spaces", 2);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  routes
app.use("/api", urlapis);
app.use(router);
app.use(express.static(path.join(__dirname, "/views")));

// starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on Port ${port}`);
});
