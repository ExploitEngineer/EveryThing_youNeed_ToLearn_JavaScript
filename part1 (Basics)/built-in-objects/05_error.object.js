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
