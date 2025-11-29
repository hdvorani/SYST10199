
class Circle {
  constructor(radius=1) {
    this.radius = radius;
  } 

  area() {
    return Math.PI * this.radius * this.radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle with radius: ${this.radius}`;
  }
}

// Export the Circle class
module.exports = Circle;
