/*
💥 1 - Sync: Start
💥 6 - Sync: End
⚡ 4 - Promise #1 (Microtask)
⚡ 5 - Promise #2 (Microtask)
⌛ 2 - setTimeout #1 (Macrotask)
⌛ 3 - setTimeout #2 (Macrotask)
🌐 7 - Fetched: [Title from API]
*/

// ======= Sync vs Async Deep Dive in JavaScript =======

// 🌟 Sync Code - runs first
console.log('💥 1 - Sync: Start');

// 🕒 Async (Macrotask): setTimeout - goes to Web APIs
setTimeout(() => {
    console.log('⌛ 2 - setTimeout #1 (Macrotask)');
}, 0);

// 🔁 Another Async (Macrotask): setTimeout again
setTimeout(() => {
    console.log('⌛ 3 - setTimeout #2 (Macrotask)');
}, 0);

// 📦 Async (Microtask): Promises go to Microtask Queue
Promise.resolve().then(() => {
    console.log('⚡ 4 - Promise #1 (Microtask)');
});

// 📦 Another Promise
Promise.resolve().then(() => {
    console.log('⚡ 5 - Promise #2 (Microtask)');
});

console.log('💥 6 - Sync: End');

// 🌍 Optional - fetch (only works in browser or Node with fetch support)
// Uncomment below if running in browser or Node.js 18+
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => console.log('🌐 7 - Fetched:', data.title));

// ========== Explanation ==========
// Expected Output Order:
// 💥 1 - Sync: Start
// 💥 6 - Sync: End
// ⚡ 4 - Promise #1 (Microtask)
// ⚡ 5 - Promise #2 (Microtask)
// ⌛ 2 - setTimeout #1 (Macrotask)
// ⌛ 3 - setTimeout #2 (Macrotask)
// 🌐 7 - Fetched: [API result]  <-- if using fetch
