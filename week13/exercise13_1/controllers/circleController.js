// controllers.circleController.js
"use strict"

const Circle = require("../models/circle");

exports.getCircle = (req, res)=>{
  const radius = req.body.radius;

  const circle = new Circle(radius);
  res.render("result", {circle});
}
