// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(value) {
    this.radius = value / (Math.PI * 2);
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

const myCircle = new Circle(5); // Create a circle with radius 5

console.log(myCircle.diameter); // Output: 10
console.log(myCircle.circumference); // Output: 31.41592653589793
console.log(myCircle.area); // Output: 78.53981633974483

myCircle.diameter = 8; // Set the diameter to 8
console.log(myCircle.radius); // Output: 4

myCircle.circumference = 25; // Set the circumference to 25
console.log(myCircle.radius); // Output: 3.976773942689927

myCircle.area = 50; // Set the area to 50
console.log(myCircle.radius); // Output: 3.181980515339464
