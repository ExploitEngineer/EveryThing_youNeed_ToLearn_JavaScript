// INFO: Math Object in JavaScript

/*
The Math object in JavaScript provides properties and methods for mathematical constants and functions.

---

INFO: Math Operators:

1. Exponentiation: **
   - Raises a number to the power of another.
   - Alternative: Math.pow(base, exponent)

---

INFO: Math Object Properties:

1. Math.PI
The ratio of the circumference of a circle to its diameter (≈ 3.14159)

2. MATH.E
Euler's number (≈ 2.718), the base of natural logarithms.

3. MATH.LN2
Natural logarithm of 2.

4. MATH.LN10
Natural logarithm of 10.

5. MATH.LOG2E
Base-2 logatithm of E.

6. MATH.SQRT1_2
Square root of 1/2 (≈ 0.707)

7. MATH.SQRT2
Square root of 2 (≈ 1.414)

---

INFO: Math Object Methods:

1. Math.round()
Rounds a number to the nereast integer.

2. Math.floor()
Always rounds down to the nereast integer.

3. Math.ceil()
Always rounds up to the nereast integer.

4. Math.random()
Returns a random decimal number between 0 (inclusive) & 1 (exclusive).

5. Math.max()
Returns the largest number from a set of numbers.

6. Math.min()
Returns the smallest number from a set of numbers. 

7. Math.pow()
Returns base raised to the power of exponent (base ^ exponent).

8. Math.sqrt()
Returns the square root of a number.

9. Math.abs()
Returns the absolute (positive) value of a number.

10. Math.trunc()
Removes the decimal part and returns only the integer.

*/

// INFO: MATH Object Operators 

// Exponentiation
console.log(2 ** 4);
console.log(Math.pow(2, 4));

// INFO: MATH Object Properties

// Math.PI
console.log(Math.PI);

// MATH.E
console.log(MATH.E);

// MATH.LN2
console.log(MATH.LN2);

// MATH.LN10
console.log(MATH.LN10);

// MATH.LOG2E
console.log(MATH.LOG2E);

// MATH.SQRT1_2
console.log(MATH.SQRT1_2);

// MATH.SQRT2
console.log(MATH.SQRT2);

// INFO: MATH Object Methods

// MATH.round()
console.log(4.5); // 5
console.log(4.4); // 4

// MATH.floor()
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5

// MATH.ceil()
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -4

// Math.random()
console.log(Math.random()); // Random float between 0 and 1

// Math.max()
console.log(Math.max(3, 10, 2)); // 10

// Math.min()
console.log(Math.min(3, 7, 1, 9)); // 1

// MATH.pow()
console.log(MATH.pow(2, 3)); // 8 (2 ^ 3)

// MATH.sqrt()
console.log(MATH.sqrt(16)); // 4

// MATH.abs()
console.log(MATH.abs(-5)); // 5

// MATH.trunc()
console.log(MATH.trunc(4.9)); // 4
console.log(MATH.trunc(-4.9)); // -4

