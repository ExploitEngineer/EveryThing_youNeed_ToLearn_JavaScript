// math.js

// INFO: Math in JavaScript

/*
The Math object in JavaScript provides properties and methods for mathematical constants and functions.

---

Math Operators:
1. Exponentiation: **
   - Raises a number to the power of another.
   - Alternative: Math.pow(base, exponent)

---

Math Object Properties:
- Math.PI
  - The constant π (3.141592653589793), useful in geometry.

---

Math Object Methods:

1. Math.sqrt(x)
   - Returns the square root of x.
   - Example: Square root of 16 is 4.

2. Math.floor(x)
   - Rounds a number down to the nearest integer.
   - Works for positive and negative numbers.

3. Math.ceil(x)
   - Rounds a number up to the nearest integer.
   - Works for positive and negative numbers.

4. Math.round(x)
   - Rounds a number to the nearest integer.
   - Rounds .5 and above up, below .5 down.

5. Math.random()
   - Returns a random float between 0 (inclusive) and 1 (exclusive).

6. Math.abs(x)
   - Returns the absolute value of x.

7. Math.min(...values)
   - Returns the smallest value among the provided numbers.

8. Math.max(...values)
   - Returns the largest value among the provided numbers.

9. Math.log(x)
   - Returns the natural logarithm (base e) of x.

10. Math.exp(x)
    - Returns e raised to the power of x.

11. Math.trunc(x)
    - Returns the integer part of a number by removing any fractional digits.

*/

// --- Exponentiation

console.log(2 ** 4); // 16
console.log(Math.pow(2, 4)); // 16

// --- Math.PI

console.log(Math.PI); // 3.141592653589793
// Example: Calculate circumference of a circle with radius 5
const radius = 5;
const circumference = 2 * Math.PI * radius;
console.log(circumference); // ≈ 31.4159

// --- Math.sqrt()

console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2));  // ~1.414

// --- Math.floor()

console.log(Math.floor(2.99));  // 2
console.log(Math.floor(-2.5));  // -3

// Example: Round down prices to nearest dollar
let price = 19.99;
console.log(Math.floor(price)); // 19

// --- Math.ceil()

console.log(Math.ceil(2.1));    // 3
console.log(Math.ceil(-2.5));   // -2

// Example: Round up for minimum number of tickets to buy
let ticketsNeeded = 4.2;
console.log(Math.ceil(ticketsNeeded)); // 5

// --- Math.round()

console.log(Math.round(2.5));  // 3
console.log(Math.round(2.4));  // 2
console.log(Math.round(-2.5)); // -2

// Example: Round a score to nearest integer
let score = 87.6;
console.log(Math.round(score)); // 88

// --- Math.random()

console.log(Math.random()); // Random float between 0 and 1

// Example: Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10

// --- Math.abs()

console.log(Math.abs(-7));  // 7
console.log(Math.abs(7));   // 7

// Example: Calculate distance between two numbers
function distance(a, b) {
  return Math.abs(a - b);
}
console.log(distance(5, 9));  // 4

// --- Math.min()

console.log(Math.min(3, 7, 1, 9)); // 1

// --- Math.max()

console.log(Math.max(3, 7, 1, 9)); // 9

// --- Math.log()

console.log(Math.log(Math.E));  // 1 (natural logarithm of e)

// --- Math.exp()

console.log(Math.exp(1));       // 2.718281828459045 (e^1)

// --- Math.trunc()

console.log(Math.trunc(4.9));   // 4
console.log(Math.trunc(-4.9));  // -4

// Example: Remove decimals from a price
let cost = 25.99;
console.log(Math.trunc(cost));  // 25

