/*
🔹 What is Asynchronous JavaScript?

JavaScript is single-threaded (only one operation can be executed at a time), but it's non-blocking, which means it can handle asynchronous operations like API calls, file reading, or timers without stopping the execution of the rest of the code.
The main tools for handling async operations are:
    Callbacks
    Promises
    async/await

🔸 Callbacks (The Original Way)
✅ Definition:
A callback is a function passed as an argument to another function, which gets called when an operation is complete.
✅ Example:
*/
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed after fetching");
});

/*
🔸 Promises (Modern Alternative)
✅ Definition:
A Promise represents a value that may be available now, in the future, or never. It has three states:
    Pending
    Fulfilled
    Rejected
✅ Example:
*/
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
    // or reject("Failed to load");
  }, 2000);
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
/*
✅ .then() vs .catch():
    .then() handles fulfilled results.
    .catch() handles rejected results.
    You can chain multiple .then() calls.
*/

/*
🔸 async/await (The Elegant Way)
✅ Definition:
async and await are syntactic sugar over Promises, making async code look synchronous.
✅ Example:
*/
async function fetchData() {
  try {
    let data = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched"), 2000)
    );
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
fetchData();

/*
🟡 Where to Use await?
    Only inside async functions.
    Only on a Promise.
    When you want to wait for the result before moving on.
*/

// 🔄 Execution Order of Sync & Async Code

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

/*
Answer:
1
4
3
2
*/

/*
🔍 Why?
JS uses:
    Call Stack for synchronous code
    Microtask Queue (Promises .then(), MutationObserver)
    Macrotask Queue (setTimeout, setInterval, DOM events)
👉 Order of execution:
    Sync code
    Microtasks (Promises)
    Macrotasks (Timers, etc.)
*/
