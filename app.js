const express = require("express");
const routes = require("./routes");
var app = express();

// configuraciones
require("dotenv").config();
const port = process.env.port || 8080;
app.set("port", port);
app.set("json spaces", 2);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  routes
app.use("/api", routes);
app.use("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on Port ${port}`);
});
