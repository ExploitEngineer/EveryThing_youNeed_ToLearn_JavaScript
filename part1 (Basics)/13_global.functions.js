/*
INFO: Global Functions
These can be called directly, like parseInt() or isNaN(), without needing an object like MATH. or JSON. 
*/

/*
INFO: parseInt(string, radix)
1. Converts a string to an integer
2. radix is the base (like 10 for decimal, 2 for binary)
*/
parseInt("42"); // 42
parseInt("101", 2); // 5 (binary to decimal)
parseInt("10.5"); // 10 (ignores decimal)
parseInt("10abc"); // 10 (ignores alphabet)
parseInt("abc"); // NaN

/*
INFO: parseFloat(string)
Converts a string to a floating point number.
*/
parseFloat("3.14"); // 3.14
parseFloat("10.00"); // 10
parseFloat("10abc"); // 10
parseFloat("abc"); // NaN

/*
INFO: isNaN(value)
1. Checks if a value is NaN (Not a Number)
2. isNaN() tries to coerce non-numbers into number
*/
isNaN("hello"); // true
isNaN(123); // false
isNaN("123"); // false -> "123" is coerced to number
inNaN(NaN); // true

/*
INFO: isFinite()
Checks if a value is a finite number (not Infinity, -Infinity or NaN)
*/
isFinite(100); // true
isFinite("50"); // true (coerced)
isFinite(Infinity); // false
isFinite(NaN); // false

/*
INFO: encodeURIComponent(str)
1. Encodes a URI component (useful for query strings, URLs).
2. Replace unsafe characters with escape sequences.
*/
const name = "rafay & team";
const safe = encodeURIComponent(name);
console.log(safe); // "rafay%20%26%20team"

/*
INFO: decodeURIComponent(str)
Reverses encodeURIComponent()
*/
decodeURIComponent("rafay%20%26%20team"); // "refay & team"

/*
INFO: String(value)
Converts any value to a string
*/
String(123); // "123"
String(true); // "true"
String(null); // "null"

/*
INFO: Number(value)
Converts to number, if possbile.
*/
Number("123"); // 123
Number("abc"); // NaN
Number(true); // 1
Number(false); // 0

/*
INFO: Boolean(value)
Converts to true or false.
*/
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
Boolean(null); // false

/*
INFO: eval(string)
Executes javascript code from a string
*/
eval("2 + 2"); // 4

/*
INFO: typeof
Not a function, but an operator that's super helpful.
*/
typeof "hello"; // string
typeof 123; // number
typeof null; // object
typeof undefined; // undefined

/*
INFO: Infinity, NaN, undefined
These are global values, not Functions
*/
console.log(Infinity); // Infinity
console.log(NaN);      // NaN
console.log(undefined); // undefined
