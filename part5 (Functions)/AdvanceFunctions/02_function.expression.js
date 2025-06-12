/*
INFO: What is a Function Expression ?
A function expression is when you assign a function to a variable. Unlike fucntion declarations, function expressions are not hoisted, and the function can be anonymous or named.
*/

// Syntax 
const variableName = function(parameters) {
  console.log("functiontion epxression");
};

// Example 
const greet = function(name) {
  console.log(`Hello ${name}!`);
};
greet("Rafay");
