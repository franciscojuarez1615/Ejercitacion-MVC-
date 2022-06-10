const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routers/main.js");

app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
});
