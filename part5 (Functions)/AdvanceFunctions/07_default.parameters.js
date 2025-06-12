/*
INFO: What are Default parameters ? 
Default parameters allow you to assign default values to function parameters if no value (or undefined) is passed.
*/

// Syntax 
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("Rafay");

// Example 
function sum(a = 2, b = a * 2) {
  return a + b;
}
console.log(sum());
console.log(sum(3));
