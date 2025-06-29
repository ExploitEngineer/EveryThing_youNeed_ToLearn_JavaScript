/* INFO: What are Truthy and Falsy Values?
In JavaScript, every value is either "truthy" or "falsy" when evaluated in a Boolean context (like inside an if condition).

- Falsy values** are those that are considered false when converted to a Boolean.
- Truthy values** are all other values that are considered true.
*/

/*
JavaScript's falsy values are exactly these:

1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN

Everything else is truthy.
*/

// Falsy Values in JavaScript
if (!false) console.log("false is falsy");
if (!0) console.log("0 is falsy");
if (!-0) console.log("-0 is falsy");
if (!"") console.log("empty string is falsy");
if (!null) console.log("null is falsy");
if (!undefined) console.log("undefined is falsy");
if (!NaN) console.log("NaN is falsy");

// Example of truthy values:
if ("hello") console.log('"hello" is truthy');
if (42) console.log("42 is truthy");
if ([]) console.log("An empty array [] is truthy");
if ({}) console.log("An empty object {} is truthy");
