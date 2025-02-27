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


