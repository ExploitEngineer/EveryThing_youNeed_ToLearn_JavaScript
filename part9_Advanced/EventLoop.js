// Event loop (for definitoin checkout the part9_Advanced folder important.txt file)


// NOTE: Event Loop Quizes

// INFO: First Quiz
console.log('A');

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C") // Answer : A C B


// INFO: Second Quiz
console.log("X");

setTimeout(() => {
    console.log("Y");
}, 0);

console.log("Z"); // Answer : X Z Y


// INFO: Third Quiz 
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => console.log("3"));

console.log("4"); // Answer : 1 4 3 2
