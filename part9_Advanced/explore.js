function sayHi() {
    console.log("Hi how are you!");
}

console.log("Hello world");

for (let i = 0; i < 11; i++) {
    console.log(`This is ${i} printing`);
}

setTimeout(() => {
    sayHi();
}, 4000);
