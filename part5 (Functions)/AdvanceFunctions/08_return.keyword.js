/*
INFO: What is the return statement ? 
The return statement is used to output a value from a function and terminate its execution.
*/

// Syntax 
function add(a, b) {
  return a + b;
}
let ans = add(2, 2);
console.log(ans);

// Example 
function greet() {
  return "Hello!";
}
let message = greet();
console.log(message);
