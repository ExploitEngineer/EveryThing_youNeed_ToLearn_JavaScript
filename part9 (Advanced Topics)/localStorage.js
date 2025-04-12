// What is local Storage ?
// Local Storage is a web storage object which are not sent to the server with each request.

// Set item
localStorage.setItem('key', 'value');

// Get item
let value = localStorage.getItem('key');

// Remove item
localStorage.removeItem('key');

// Clear all storage
localStorage.clear();

// Check length
console.log(localStorage.length);

// Loop through keys
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}
