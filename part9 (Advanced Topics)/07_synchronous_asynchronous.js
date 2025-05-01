// ✅ Synchronous vs Asynchronous JavaScript

// ➤ Synchronous means one task runs after the other.
// The second task will only start once the first one finishes.

console.log("Task 1");
console.log("Task 2"); // Runs only after Task 1 finishes

// ➤ Asynchronous means multiple tasks are initiated at once,
// and the one that finishes first gets executed first.

setTimeout(() => {
  console.log("Async Task Completed");
}, 2000);

console.log("This runs immediately");

// 🔹 JavaScript is *not* asynchronous by nature.
// It is single-threaded, but we can use asynchronous constructs
// to avoid blocking operations (like network requests, timers, etc).

// ------------------------------------------------------------------

// ✅ The Real Story of Async JavaScript

// 🔸 JavaScript is single-threaded.
// It executes one line of code at a time in a single call stack.

// 🔸 But we can still do asynchronous operations using:
// 1. Callbacks
// 2. Promises
// 3. Async/Await

// ------------------------------------------------------------------

// ✅ Callback Example

// A callback is a function that runs after another function completes.
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback(); // Executes when data fetching is done
  }, 1000);
}

fetchData(() => {
  console.log("Callback called after data fetched.");
});

// ------------------------------------------------------------------

// ✅ Promises Example

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// Example: Generate random number and resolve if < 5

const numberCheck = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log("Generated Number:", num);
  if (num < 5) resolve("Number is below 5");
  else reject("Number is 5 or above");
});

numberCheck.then(console.log).catch(console.warn);

// ------------------------------------------------------------------

// ✅ Chained Promises Example

const goHome = new Promise((resolve) => {
  resolve("1. Go home");
});

goHome
  .then((step1) => {
    console.log(step1);
    return "2. Open the gate and lock it";
  })
  .then((step2) => {
    console.log(step2);
    return "3. Cook and eat dinner";
  })
  .then((step3) => {
    console.log(step3);
    return "4. Open incognito mode";
  })
  .then((step4) => {
    console.log(step4);
    return "5. Go to sleep";
  })
  .then((finalStep) => {
    console.log(finalStep);
  });

// ------------------------------------------------------------------

// ✅ Async/Await - Cleaner Syntax for Promises

// Async/Await lets us write asynchronous code like it's synchronous.

async function fetchUser() {
  try {
    const raw = await fetch("https://randomuser.me/api/");
    const data = await raw.json();
    console.log("Fetched user:", data.results[0]);
  } catch (err) {
    console.error("Error fetching user:", err);
  }
}

fetchUser();

// ------------------------------------------------------------------

// ✅ 5 Common Use Cases for Async Code
// 1. Fetching data from APIs (fetch)
// 2. Reading/writing files or databases (Node.js, MongoDB, etc.)
// 3. Delays using setTimeout()
// 4. Repeated actions using setInterval()
// 5. Image or file uploads

// ------------------------------------------------------------------

// ✅ Key Concepts

// 🔸 Concurrency: JavaScript can handle sync and async tasks together,
// managing them in the event loop using the call stack and task queue.

// 🔸 Parallelism: Running multiple threads on different processors simultaneously.
// JS is single-threaded, but web APIs, Workers, and backend runtimes (like Node.js) help with this.

// 🔸 Throttling: Controlling the rate of execution for performance.
// Useful for scroll events, API rate limiting, etc.

function throttle(fn, limit) {
  let inThrottle = false;
  return function () {
    if (!inThrottle) {
      fn();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledFn = throttle(() => console.log("Executed"), 1000);
window.addEventListener("scroll", throttledFn);

// ------------------------------------------------------------------

/**
 * ✨ Summary:
 * - JS is single-threaded but can run async operations using callbacks, promises, and async/await.
 * - Promises and async/await are modern and preferred ways to handle async tasks.
 * - Always handle errors with try/catch in async/await.
 */
