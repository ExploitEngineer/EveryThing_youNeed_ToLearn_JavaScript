/*
INFO: JavaScript Number Object
The Number object is a wrapper object around primitive number values. It provides properties and methods to work with numeric values, such as checking for infinity, NaN, parsing, formatting, and converting between types.
*/

let numPrimitive = 42; // number literal (primitive)
let numObject = new Number(42); // Number object (no recommended for most use cases)

// 1. Properties of Number
Number.EPSILON; // smallest interval between two representable numbers.
Number.MAX_VALUE; // Largest number possible
Number.MIN_VALUE; // Smallest number
Number.MAX_SAFE_INTEGER; // Largest safe integer
Number.MIN_SAFE_INTEGER; // Smallest safe integer
Number.NaN; // Special value representing Not-a-Number
Number.NEGATIVE_INFINITY; // represents negative infinity
Number.POSITIVE_INFINITY; // represents positive infinity

// 2. Methods of Number
Number.isFinite(10); // true
Number.isInteger(10.5); // true
Number.isNaN(NaN); // true
Number.isSafeInteger(9999999999); // false
Number.parseInt("42px"); // 42
Number.parseFloat("3.14abc"); // 3.14

// 3. Instance Methods (on number values) -- this () behaves like new Number(3.14159)
(3.14159).toFixed(2); // "3.14"
(12345).toExponential(2); // "1.23e+4"
(99.99).toPrecision(3); // "100"
(255).toString(16); // "ff"
new Number(100).valueOf(); // 100
