// 1. Local and Global Scope

// Global Scope
// variables declared outside any fucntion or block.
// can be accessed from anywhre in the code.
let globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar); // ✅ accessible
}

// Local Scope
// Variables declared inside a function or block.
// Can only be accessed inside that function/block.

// 2. Funtion Scope
// variables declared with var are function scoped.
// They are accessible only inside the function they are declared in.
function test() {
  var a = 5;
}
console.log(a); // ❌ Error: a is not defined

// 3. Block Scope
// Introduced with let and const.
// Only accessible within the block {} they’re defined in.
if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // ❌ Error
console.log(y); // ❌ Error

// 4. Lexical scope
// Determines how variable names are resolved in nested functions.
// Inner functions have access to variables from their outer function, even after the outer function has returned.
function outer() {
  let name = "John";

  function inner() {
    console.log(name); // ✅ accessible due to lexical scope
  }

  inner();
}
outer();

// 5.  🧠 Closures
// Closures are functions that remember their outer variables, even after the outer function has finished executing.
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer(); // `outer` returns `inner`
counter(); // Count: 1
counter(); // Count: 2
