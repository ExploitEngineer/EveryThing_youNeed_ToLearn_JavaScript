// variables.js

// Using let (recommended for variables that can change)
let age = 20;  // Declare and initialize variable
age = 30;      // Update the value


// Using const (for constant values that should not change)
const pi = 3.14;  // Declare and initialize constant


// Using var (old way, avoid if possible)
// var declarations are function-scoped and can lead to unexpected behavior
var name = "John";


// Variable scope examples:

// Block scope with let and const
if (true) {
  let blockScoped = "I exist only inside this block";
  const constantScoped = "Also block-scoped";
  console.log(blockScoped);    // Works here
}
// console.log(blockScoped);   // Error: blockScoped is not defined


// var is function scoped, not block scoped
if (true) {
  var functionScoped = "I exist inside the function or globally";
}
console.log(functionScoped);  // Works here (if not inside a function)


// Variable naming rules:
// - Can contain letters, digits, underscores, and dollar signs
// - Cannot start with a digit
// - Case sensitive (age and Age are different)

// Example of valid variable names:
let userName;
let $amount;
let _count;

// Example of invalid variable name:
// let 1stName;  // Syntax Error


// Variables declared without let, const, or var become global (avoid this)
function wrongExample() {
  someVar = 10;  // Declares a global variable unintentionally
}
wrongExample();
console.log(someVar);  // 10 (global scope)


