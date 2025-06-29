/*
INFO: JavaScript Variables:
- var: old way avoid using var
- let: variables that can change
- const: constant values that should not change
*/

// var declarations are function-scoped and can lead to unexpected behavior
var name = "John";

let age = 20; // Declare and initialize variable
age = 30; // Update the value

const PI = 3.14; // Declare and initialize constant

// INFO: Variable scopes:

// GLobal scope: can be accessable anywhere in the code
var a = 10;
let b = 20;
const c = 30;

// Block scope: only var is accessable outside the block
if (true) {
  var accessable = "I am accessable";
  let blockScoped = "I exist only inside this block";
  const constantScoped = "Also block-scoped";
  console.log(blockScoped, constantScoped, accessable); // Works here
}
// console.log(blockScoped, constantScoped);   // Error

// Function scope: only accessable inside the function
function abc() {
  var d = 10;
  let e = 20;
  const f = 30;
  console.log(d, e, f);
}
console.log(d, e, f); // Error

/*
INFO: Variable naming rules:
- Can contain letters, digits, underscores, and dollar signs
- Cannot start with a digit
- Case sensitive (age and Age are different)
*/

// Example of valid variable names:
let userName;
let $amount;
let _count;

// Example of invalid variable name:
// let 1stName;  // Syntax Error

// INFO: Variables declared without let, const, or var become global (avoid this)
function wrongExample() {
  someVar = 10; // Declares a global variable unintentionally
}
wrongExample();
console.log(someVar); // 10 (global scope)
