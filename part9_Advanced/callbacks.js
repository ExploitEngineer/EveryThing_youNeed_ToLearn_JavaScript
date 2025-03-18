/*
✅ 1. Callbacks
📖 Definition: - A callback function is a function passed as an argument to another function to be executed later.
*/

function fetchData(callback) {
    setTimeout(() => {
        console.log(`Data fetched from the server`);
        callback();
    }, 2000);
}

function processData() {
    console.log(`Processing the fetched data`);
}
fetchData(processData);

// output
/*
Data fetched from the server  (after 2 seconds)
Processing the fetched data
*/
