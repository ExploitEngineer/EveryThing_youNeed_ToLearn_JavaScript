// datatypes.js

/*
JavaScript is dynamically typed, so variables can hold any type of data without explicit type declaration.

Common data types in JavaScript:

1. String      - Text wrapped in quotes
2. Number      - Numeric values (integers and floats)
3. Boolean     - true or false
4. BigInt      - For very large integers
5. Undefined   - A variable declared but not assigned a value
6. Null        - Represents intentional absence of any object value
7. Object      - Collections of key-value pairs, arrays, functions, etc.
8. Symbol      - Unique and immutable primitive values
*/

// Examples of different data types:

// String
let name = "whoami";
console.log(name); // whoami

// Number
let score = 102;
console.log(score); // 102

// Boolean
let isLoggedIn = false;
console.log(isLoggedIn); // false

// Object - Array
let teaTypes = ["lemon tea", "orange tea", "oolong tea"];
console.log(teaTypes); // ["lemon tea", "orange tea", "oolong tea"]

// Object - Plain Object
let user = { firstName: "whoami", lastName: "dsnake0" };
console.log(user); // { firstName: "whoami", lastName: "dsnake0" }

// Assigning variable values
let getScore = score;
console.log(getScore); // 102

// Undefined example
let something;
console.log(something); // undefined

// Null example
let emptyValue = null;
console.log(emptyValue); // null
