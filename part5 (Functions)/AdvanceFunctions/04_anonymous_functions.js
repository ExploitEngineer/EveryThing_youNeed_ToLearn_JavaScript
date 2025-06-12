/*
INFO: 🔍 What is an Anonymous Function?
An anonymous function is a function without a name.
Unlike named functions these are often used as values, usually when: 
1. Passing a function as an argument 
2. Assiging to variables
3. Using in array methods like map, forEach, etc. 
*/

// Syntax
function() {
  console.log("hi")
};

// Example
const greet = function() {
  console.log("Hello!");
}
greet();
