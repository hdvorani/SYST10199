// controllers.productController.js

const path = require("path");
const products = require(path.join(__dirname, "../", "models", "products.json"));

exports.getProducts = (req, res) => {
   // Pass data to view
  res.render("index", { products });
};
