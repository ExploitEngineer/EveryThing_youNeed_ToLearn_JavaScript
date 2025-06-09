// printing.js

// INFO: Different Ways to Print Output in JavaScript

// 1. console.log()
//    - Prints messages to the console with a newline.
console.log("Hello");

// 2. process.stdout.write()
//    - Writes output without adding a newline (Node.js specific).
process.stdout.write("hey\n"); // Added \n for newline

// 3. console.table()
//    - Displays objects or arrays in a table format for better readability.
console.table({ city: "Islamabad" });

// 4. console.warn()
//    - Prints warning messages, usually highlighted in the console.
console.warn({ city: "newCity" });

/*
Note:
- In browsers, `console.log()`, `console.warn()`, and `console.table()` are commonly used.
- `process.stdout.write()` is primarily used in Node.js environments.
*/
