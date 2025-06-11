// Function Statement (a.k.a. Function Declaration)
a(); // Works because of hoisting
function a() {
  console.log("a called");
}

// Function Expression
// Not hoisted like declarations
let b = function () {
  console.log("b called");
};
b();

// Anonymous Function (function without a name)
// Usually used in function expressions or callbacks
let c = function () {
  console.log("anonymous function");
};
c();

// ❌ Not valid alone:
// function () { console.log("error"); }; // SyntaxError

// Named Function Expression
let d = function abcd() {
  console.log("Named function expression");
};
d();
// console.log(abcd); // ❌ ReferenceError (name is not accessible outside)

// First-Class Functions
// Functions can be passed as arguments, returned from other functions, and stored in variables

function sayHello() {
  return "Hello!";
}

function executeFn(fn) {
  console.log("Result:", fn()); // Passing function as argument
}
executeFn(sayHello);

// Returning a function
function outer() {
  return function () {
    console.log("I’m inside a returned function");
  };
}
const innerFn = outer();
innerFn(); // Outputs: I’m inside a returned function

// Arrow Functions (ES6)
// Shorter syntax, `this` is lexically scoped
const greet = (name) => {
  console.log(`Hello, ${name}`);
};
greet("Rafay");

// IIFE – Immediately Invoked Function Expression
(function () {
  console.log("IIFE called immediately!");
})();

// Callback Functions
function loadData(callback) {
  console.log("Fetching data...");
  callback(); // calling the passed function
}
loadData(function () {
  console.log("Callback called after fetching.");
});
