/*
🔥 JavaScript Execution Model (Call Stack, Event Loop, Microtask, Macrotask)
JavaScript is single-threaded, which means only one thing can happen at a time. But how does it handle things like setTimeout, fetch, Promises, or DOM events without blocking?
Let’s understand how JavaScript actually runs code behind the scenes.
*/

/*
📦 1. Call Stack (Execution Stack)
The Call Stack is like a pile of plates.
Each function call goes on top (pushed), and once it finishes, it’s removed (popped).
✅ Example:
*/
function one() {
  two();
}
function two() {
  console.log("Hello");
}
one();
/*Call Stack Behavior:
    one() → pushed
    two() → pushed
    console.log("Hello") → pushed
    console.log → popped
    two() → popped
    one() → popped
    🧠 The call stack is synchronous — it can’t do two things at once.
*/

/*
🌀 2. Web APIs / Browser APIs
Functions like:
    setTimeout
    fetch
    DOM events (e.g., click, keydown)
    console.log (technically not part of the language spec either)
are NOT part of JavaScript itself.
They are provided by Browser APIs (or Node APIs in Node.js).
When called, they are handled outside the call stack, and JavaScript moves on.

⏳ 3. Callback / Task Queues
When async operations finish (e.g., setTimeout, fetch), their callbacks go to queues waiting for the call stack to be empty.
There are two main queues:
4️⃣ Microtask Queue
Microtasks:
    .then() in Promises
    MutationObserver
    queueMicrotask()
These run before any macrotask.
They are priority and run immediately after the call stack is empty.
5️⃣ Macrotask Queue (aka Task Queue)
Macrotasks:
    setTimeout
    setInterval
    setImmediate (Node.js)
    requestAnimationFrame
These are less urgent, so they are handled after microtasks finish.

🔁 6. Event Loop
    The Event Loop is the orchestrator between the Call Stack and the Queues.
📊 How It Works:
    Look at the Call Stack
    If it's empty, check the Microtask Queue
    Run all microtasks (until empty)
    Then run one macrotask from Macrotask Queue
    Repeat...

🔍 Deep Example
*/
console.log("Start");

setTimeout(() => {
    console.log("Macrotask: Timeout")
}, 0)

Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("End");

/*
🔄 Execution Order:
    console.log("Start") → Call Stack
    setTimeout → offloaded to Web APIs
    Promise.then() → registered in Microtask Queue
    console.log("End") → Call Stack
    ✅ Call Stack empty
    👉 Event Loop checks Microtask Queue → console.log("Microtask: Promise")
    👉 Now checks Macrotask Queue → console.log("Macrotask: Timeout")
✅ Final Output:
Start
End
Microtask: Promise
Macrotask: Timeout
*/
