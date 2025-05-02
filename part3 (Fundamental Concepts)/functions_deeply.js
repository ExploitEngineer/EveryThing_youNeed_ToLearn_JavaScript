// Function Statement aka Function Declaration
a();
function a() {
  console.log("a called");
}

// Function Expression
let b = function () {
  console.log("b called");
};
b();

// Anonymous Funtions
let c = function () {
  console.log("anonymous function");
};

// Named Function Expression
let d = function abcd() {
  console.log("Named function expression");
};

// First Class Functions
// the functions which we can pass to another function pass as  a value, can be returned from another function is called frist class functions.

