// Non-Primitive Data Types in JavaScript
// These are reference types — stored and compared by reference (memory address).

// 1. Object
const user = {
  name: "Rafay",
  age: 22,
  isAdmin: false
};

console.log(typeof user);      // "object"
console.log(user.name);        // "Rafay"

// 2. Array (special type of object)
const skills = ["HTML", "CSS", "JavaScript"];

console.log(typeof skills);    // "object"
console.log(skills[1]);        // "CSS"

// 3. Function (also a type of object)
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(typeof greet);     // "function"
console.log(greet("Rafay"));   // "Hello, Rafay!"

// 4. Date (built-in object)
const today = new Date();

console.log(typeof today);     // "object"
console.log(today.toDateString()); // e.g., "Wed Jun 11 2025"

// 5. Object Comparison (by reference)
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2);    // false (different memory)
console.log(obj1 === obj3);    // true (same reference)
