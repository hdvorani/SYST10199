// app.js

"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// Ensure this route is still intact and correctly defined
app.get("/circle/:radius", homeController.renderIndex);
app.get("/circle/", homeController.renderIndex); // Added route to handle optional radius


app.listen(app.get("port"), () => {
  console.log(`Server running on http://localhost:${app.get("port")}`);
});
