/*
INFO: Error Object
The Error object in javascript is used to represent rumtime errors. It helps identify what went wrong and where it happened.
*/

// You can create an error manually like this:
let err = new Error("Something went wrong");
throw err; // Throws the err

// Properties of Error

let error = new Error("Something failed");
console.log(error.name); // "Error"
console.log(error.message); // "Something failed"
console.log(error.stack); // Stack trace info

// Common Error Types in JavaScript
/*
INFO: 1. Error
The base error object. You'll usually use this when no specific error type fits.
*/
throw new Error("Generic error");

/*
INFO: 2. ReferenceError
Accessing a variable that doesn't exist.
*/
console.log(abc);

/*
INFO: 3. SyntaxError
Code is written incorrectly and can't be parsed.
*/
eval("if true { console.log('Oops') }");

/*
INFO: 4. TypeError
Using a value in an invlaid way (e.g., calling something that's not a function)
*/
const x = 42;
x();

/*
INFO: 5. Range Error
A number is outside an allowable range.
*/
let arr = new Array(-1); // Invalid array length

/*
INFO: 6. EvalError
An error related to the eval() function.
Modern JS rarely throws EvalError anymore.
*/

/*
INFO: 7. InternalError (Non-standard / browser-specific)
*/
function recurse() {
  recurse();
}
recurse();

/*
INFO: 8. AggregateError
Represents multiple errors at once - usually from Promise.any() or similar async code.
*/

const error1 = new AggregateError(
  [new Error("Error 1"), new Error("Error 2")],
  "Multiple failures",
);

console.log(error1.name); // AggregateError
console.log(error1.errors); // Array of errors
