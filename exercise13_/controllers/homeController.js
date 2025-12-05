// controllers/homeController.js

"use strict";
const path = require("path");

exports.renderIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
}
