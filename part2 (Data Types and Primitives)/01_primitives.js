// Primitive Data Types in JavaScript
// These are the most basic data types — stored directly by value (not by reference).

// 1. Number
let age = 25; // Integer
let pi = 3.14; // Float

console.log(typeof age); // "number"
console.log(typeof pi);  // "number"

// 2. String
let name = "Rafay";
let greeting = `Hello, ${name}!`; // Template string (string interpolation)

console.log(typeof name);      // "string"
console.log(greeting);         // "Hello, Rafay!"

// 3. Boolean
let isOnline = true;
let isAdmin = false;

console.log(typeof isOnline);  // "boolean"

// 4. Null
let emptyValue = null;

console.log(typeof emptyValue); // "object" (⚠️ a known JavaScript quirk)

// 5. Undefined
let notAssigned;

console.log(typeof notAssigned); // "undefined"

// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // Add 'n' at the end

console.log(typeof bigNumber); // "bigint"

// 7. Symbol
let uniqueId1 = Symbol("userId");
let uniqueId2 = Symbol("userId");

console.log(typeof uniqueId1); // "symbol"
console.log(uniqueId1 === uniqueId2); // false – every Symbol is unique!
