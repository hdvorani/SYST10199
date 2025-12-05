// controllers/circleController.js
"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get("/menu/:day", homeController.renderIndex);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
