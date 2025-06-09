// operatorPrecedence.js

// INFO: Operator Precedence in JavaScript

/*
Operator precedence determines the order in which parts of an expression are evaluated.

Expressions with multiple operators are evaluated based on this precedence,
not just from left to right.

To avoid confusion and bugs, use parentheses () to explicitly specify the order.

---

Example 1: Without parentheses (can be confusing)
let score = 2 * 3 + 2 - 1;
// Evaluated as: (2 * 3) + 2 - 1 = 6 + 2 - 1 = 7

---

Example 2: With parentheses (clear and recommended)
let score1 = ((2 * (3 + 2)) - 1);
// Evaluated as: 2 * (5) - 1 = 10 - 1 = 9

---

Console outputs:
*/

let score = 2 * 3 + 2 - 1;
let score1 = ((2 * (3 + 2)) - 1);

console.log(score);  // Output: 7
console.log(score1); // Output: 9

// TIP: Use parentheses to make your code easier to read and avoid unexpected results.
