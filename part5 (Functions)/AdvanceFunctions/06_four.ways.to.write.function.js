// INFO: Four ways to write function

/*
NOTE: Why this matters ? 
JavaScrpit allows multiple ways to define fucntions, and each has different behaviour in terms of: 
1. Hoisting 
2. this binding 
3. Syntax clarity 
4. Use cases 
*/

// 1. Function Declaration 
greet();
function greet() {
  console.log("Hello");
}

// 2. Function Expression 
const user = function(user) {
  console.log(`Welcome ${user}`);
}
user("Rafay");

// 3. Arrow Function (ES6)
const add = (a, b) => a + b;
add(3, 3);


// 4. IIFE 
(function() {
  console.log("I run immediately!");
})();
