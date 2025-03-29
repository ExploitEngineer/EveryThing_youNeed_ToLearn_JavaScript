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


// INFO: Switch & Case
const dayNumber = 5;

switch (dayNumber) {
    case 0:
        console.log("It is sunday Today");
    case 1:
        console.log("It is Monday Today..");
    case 2:
        console.log("It is Tuesday Today...");
    case 3:
        console.log("It is Wednesday Today..");
    case 4:
        console.log("It is Thursday Today..");
    case 5:
        console.log("It is Friday Today.");
        break;
    case 6:
        console.log("It is Saturday Today");
    default:
        console.log("No days left");
}

// INFO: Ternary Operator
dayNumber == 0 ? console.log("It is true...") : console.log("It is false...");

const gender = "F";
const userMessage = `${gender === "F" ? "She" : "He"} is a college student.`
console.log(userMessage);



// INFO: If and else statements
let age = 20;
if (age >= 20) {
    console.log("You are an adult...");
} else if (age >= 13) {
    console.log("You are a teenager...");
} else {
    console.log("You are a child...");
}


// INFO: Switch Case Statements
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}


// INFO: Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do while loop
let a = 0;
do {
    console.log(a);
    i++;
} while (i < 5);


// for of
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}


// for-in
const person = { name: "Alice", age: 25 };
for (const key in person) {
    console.log(key + ": " + person[key]);
}


// INFO: Break and continue
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
} // 0 1 2  break will exists the loop;


for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
} // 0 1 2 4  continue skips the current iteration


// NOTE: Quizes

// INFO: Quiz 1
let x = 5;
if (x = 10) {
    console.log("x is 10");
} else {
    console.log("x is not 10");
} // x is 10

// INFO: Quiz 2
const numbers = [1, 2, 3, 4, 5];
for (let i in numbers) {
    if (i == 2) break;
    console.log(i);
} // 0 1


// INFO: Quiz 3
let z = 0;
while (z < 3) {
    console.log(z);
    z++;
} // 0 1 2

// INFO: Quiz 4
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 0); // 0

// INFO: Quiz 5
let value = 0;
for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    value += i;
}
console.log(value); // 4

// INFO: Quiz 6
let output = "";
switch ("apple") {
    case "banana":
        output += "Banana ";
    case "apple":
        output += "Apple ";
    case "orange":
        output += "Orange ";
        break;
    default:
        output += "None";
}
console.log(output); // banana orange

// INFO: Quiz  7
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        if (j === 1) break;
        console.log(i, j);
    }
} // 0 0, 1 0, 2 0

// INFO: Quiz 8
let c = 0;
while (c < 3) {
    if (c === 1) continue;
    console.log(c);
    c++;
} // 0 2

// INFO: Quiz 9
let count1 = 0;
do {
    console.log(            );
    count1++;
    if (count1 === 2) break;
} while (count1 < 5); // 0 1

// INFO: Quiz 10
let result = 0;
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        result += i;
    } else {
        result -= i;
    }
}
console.log(result); // 5


