// homeController.js
"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {

    const radius = req.params.radius ? parseFloat(req.params.radius) : 1; // to make radius optional with default 1
    const circle = new Circle(radius);
    res.render("index", { circle: circle });
};
