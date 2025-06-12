/*
INFO: ⚡ What is an IIFE ?
IIFE Stands for (Immediately Invoked Function Expression). It's a function that executes immediately after it's defined, without needing to be called later.
*/

// Syntax 
(function() {
  console.log("I run immediately!");
})();

// Example 
(function() {
  const message = "Hello from IIFE!";
  console.log(message);
})();
// console.log(message); // ❌ Error: message is not defined

