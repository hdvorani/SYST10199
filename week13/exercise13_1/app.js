// app.js

"use strict"

const express = require("express");
const path = require("path");

// Require controllers
const homeController = require(path.join(__dirname, "controllers", "homeController"));
const circleController = require(path.join(__dirname, "controllers", "circleController"));

const app = express();
app.set("port", process.env.PORT || 3000);

// Midleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.get('/', homeController.renderIndex);
app.post('/submit', circleController.getCircle)

// Middleware for accessing static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
