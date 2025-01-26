// Checking if a number is greater than another number;

let num1 = 5;
let num2 = 8;
console.log("I am the regular upper code");

if (num1 > num2) {
    console.log("num 1 is greater than num2");
} else {
    console.log("num 1 is not greater than num2");
}

console.log("I am regular bottom code");


// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username != anotherUsername) {
    console.log("Pick another username");
} else {
    console.log("Didn't get any username");
}



// Checking if a variable is the number or not:

let score = 44;

if (typeof (score) === 'number') {
    console.log("Yep, this is the number");
} else {
    console.log("No that is not a number");
}

let arr = [];

if (typeof (arr) === 'object') {
    console.log("Yep, this is the object");
} else {
    console.log("This is array");
}


// Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
    console.log("Tea is Ready");
} else {
    console.log("Tea is not ready !");
}


// Check if an array is empty or not:

let items = [];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}
