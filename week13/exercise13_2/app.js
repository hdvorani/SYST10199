// app.js

const express = require("express");
const app = express();
const path = require("path");
const productController = require('./controllers/productController.js')

// View engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", productController.getProducts);

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
