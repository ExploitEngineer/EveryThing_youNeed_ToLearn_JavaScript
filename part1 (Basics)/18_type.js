// Type Operators in JavaScript

/*
typeof       Returns the data type of a variable or expression.
instanceof   Checks if an object is an instance of a constructor.
in           Checks if a property exists in an object.
*/

// typeof
console.log(typeof 42);          // Output: "number"
console.log(typeof 'hello');     // Output: "string"

// instanceof
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true

// in
const person = {name: 'Alice', age: 25};
console.log('age' in person);   // Output: true
console.log('salary' in person);// Output: false
