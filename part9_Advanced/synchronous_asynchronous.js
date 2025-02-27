/*
1️⃣ Synchronous vs. Asynchronous JavaScript (Basic Concept)
🔹 Synchronous: Code executes line by line, blocking further execution until a task completes.
🔹 Asynchronous: Code does not wait, allowing other tasks to continue while waiting for an operation to finish.
*/

/* 
1️⃣ What is the Event Loop?
The Event Loop is what allows JavaScript to handle asynchronous operations without blocking execution. It enables JavaScript to run single-threaded, yet still perform non-blocking I/O operations, like handling API requests, setTimeout, and user interactions.
*/

/*
Call Stack
JavaScript uses a Call Stack to keep track of function execution.

When a function is called, it's added to the stack.
When a function completes, it's removed from the stack.
If a function calls another function, the new function is added on top of the stack.
*/

const startTime = Date.now();
let currentTime = startTime;

while (startTime + 2000 > currentTime) {
    currentTime = Data.now()
}


// NOTE: Quizes 

// INFO: First Quiz 
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D"); // Answer : A D C B


// INFO: Second Quiz 
console.log("1");

setTimeout(() => console.log("2"), 1000);

setTimeout(() => console.log("3"), 500);

console.log("4"); // Answer : 1 4 3 2


