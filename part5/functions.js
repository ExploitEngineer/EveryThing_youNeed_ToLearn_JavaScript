/* 1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. Store the result in a variable named `teaOrder`. */

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);


/* 2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another fucntion named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result. */

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);


/* 3. Write a arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`. */

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(499 * 100)


/* 4. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.*/

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);


/* 5. Write a function name `createTeaMaker` that returns another function. The returned function should take one paramerter, `teaTypes`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`. */



function createTeaMaker(name) {
    return function (teaType) {
        let score = 100;
        return `Making ${teaType} ${name} ${score};`
    }
}

let teaMaker = createTeaMaker("whoami");
let result = teaMaker("green tea");
console.log(result);



// NOTE: Functions in Detail

function introduceMe(username = 'newEmployee', developer = 'Mechanical Engineer', age = 18) {
    if (age === 18 && age >= 18) {
        console.log("You'r eligible...");
    } else {
        console.log("You'r are not eligilbe....");
    }
    console.log("Hi");
    console.log(`My name is ${username}.`);
    console.log(`I am a Web ${developer}.`);
    console.log(`My age is ${age}`)
};
introduceMe('Abdul Rafay', 'Cyber Security Engineer', 17);
introduceMe('Zain', 'Android Developer', 17);
introduceMe('Shiraz', 'Web Developer', 20);
introduceMe();



// NOTE: Functions Quizes

// INFO: First Quiz
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Answer : Hello, Alice!


// INFO: Second Quiz
function test() {
    let x = 5;
}
console.log(test()); // Answer : undefined


// INFO: Third Quiz
console.log(myFunction());

function myFunction() {
    return "Hello!";
}


// INFO: Fourth Quiz
function sum(a, b) {
    return a + b;
}
console.log(sum(3)); // Answer : NAN


// INFO: Fifth Quiz
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // Answer : 10


// INFO: Sixth Quiz
function createGreeting(name) {
    return function () {
        console.log('Hello ' + name);
    };
}
const greetJohn = createGreeting("John");
greetJohn(); // Hello, John


// INFO: Seventh Quiz
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter()); // 123


// INFO: Eight Quiz
function outer() {
    let x = 10;
    function inner() {
        x++;
        console.log(x);
    }
    return inner;
}
const myFunc = outer();
myFunc();
myFunc(); // 11, 12

// INFO: Ningth Quiz
function createAdder(x) {
    return function (y) {
        return x + y;
    }
}
const add5 = createAdder(5);
const add10 = createAdder(10);

console.log(add5(2));
console.log(add10(2)); // 7 12


// INFO: Tenth Quiz
function secretHolder() {
    let secret = "I am hidden:";

    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
        }
    };
}
const obj = secretHolder();
console.log(obj.getSecret());
obj.setSecret("New secret revealed!");
console.log(obj.getSecret()); // I am hidden: | New secret revealed!
