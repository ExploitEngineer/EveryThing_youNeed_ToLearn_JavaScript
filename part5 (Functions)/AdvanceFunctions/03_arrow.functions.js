/*
:INFO: 🏹 What is an Arrow Function?
Arrow functions are a concise syntax for writing functions introduced in ES6. They are great for writing short functions and callbacks. 
*/

// Syntax 
const functionName = (parameters) => {
  console.log("Hi");
};

// Example 
const greet = (name) => {
  console.log(`Hello, ${name}`);
};
greet("Rafay");

// One-liner return (implicit return)
const square = n => n * n;
console.log(square(5));
