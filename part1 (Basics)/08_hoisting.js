// hoisting.js

// INFO: Hoisting in JavaScript

/*
Hoisting is a JavaScript mechanism where variables and function declarations
are moved to the top of their scope (memory phase) before code execution.

Important:
- Only **declarations** are hoisted, not **initializations**.
- Function declarations are fully hoisted.
- var is hoisted and initialized as undefined.
- let and const are hoisted but not initialized (temporal dead zone).
*/

// Function call before it's defined – this works because function declarations are hoisted
getName(); // Output: "JavaScript"

// Accessing a 'var' variable before declaration – it's hoisted with undefined
console.log(x); // Output: undefined

// Accessing the function by name – shows the function definition
console.log(getName);
// Output: [Function: getName]

var x = 7;

// Function Declaration
function getName() {
  console.log("JavaScript");
}

/*
Summary:

- Function declarations are hoisted completely (both name and body).
- var is hoisted and set to undefined.
- let and const are hoisted but in the "temporal dead zone" – accessing them before declaration causes ReferenceError.

Good Practice:
- Always declare variables and functions at the top of their scope.
- Prefer let and const over var to avoid confusion caused by hoisting.
*/
