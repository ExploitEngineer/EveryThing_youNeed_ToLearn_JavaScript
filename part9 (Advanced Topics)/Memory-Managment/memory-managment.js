/*
INFO: What is Memory Lifecycle in JavaScript ?
JavaScript, like most high-level languages, handles memory automatically.

Memory lifecycle has 3 phases:
1. Allocation: memory is reserved when variables or functions are declared.
2. Usage: you work with that memory (access/change variables, call functions).
3. Release (Garbage Collection): JS automatically frees memory that's no longer used.
*/

// Exmaple
function greet() {
  const name = "Rafay"; // Allocation
  console.log("Hello", name); // Usage
} // when function ends, memory for `name` is released

/*
INFO: What is Garbage Collection ?
Garbage Collection is the process of automatically freeing memory that's no longer reachalbe/used in the program.
JavaScript uses a garbage collector to scan memory and clean up values that can't be reached anymore.
*/
