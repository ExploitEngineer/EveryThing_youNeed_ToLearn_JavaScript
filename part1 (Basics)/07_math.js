// INFO: Math in JavaScript

// NOTE: Math Object Operators and Methods

/*
Math Operators:
1. Exponentiation: **
   (Alternative: Math.pow)

Math Object Properties:
- Math.PI  → Returns the value of π

Math Object Methods:
- Math.sqrt(x)      → Square root of x
- Math.floor(x)     → Rounds down to nearest integer
- Math.ceil(x)      → Rounds up to nearest integer
- Math.round(x)     → Rounds to nearest integer
- Math.random()     → Returns a random number between 0 and 1
*/

// Exponentiation (Preferred way)
console.log(2 ** 4); // Output: 16

// Exponentiation (Alternative)
console.log(Math.pow(2, 4)); // Output: 16

// Math Property
console.log(Math.PI); // Output: 3.141592653589793

// Math Methods
console.log(Math.sqrt(16)); // Output: 4

console.log(Math.floor(2.99)); // Output: 2
console.log(Math.floor(-2.5)); // Output: -3

console.log(Math.ceil(2.1)); // Output: 3
console.log(Math.ceil(-2.5)); // Output: -2

console.log(Math.round(2.5)); // Output: 3
console.log(Math.round(2.4)); // Output: 2

console.log(Math.random()); // Output: Random value between 0 and 1
console.log(Math.round(Math.random() * 20)); // Output: Random integer from 0 to 20
