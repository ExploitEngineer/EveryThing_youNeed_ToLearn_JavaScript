// INFO: Return Keyword in JavaScript Functions ....

function addTwoNumbers(a, b) {
    console.log(`The sum of ${a} & ${b} is ${a + b}`);
    return a + b;
};
const result = addTwoNumbers(5, 6);
console.log(result);


// NOTE: Return keyword quizes

// INFO: First Quiz 
function add(a, b) {
    return a + b;
    console.log("This will not be executed!");
}

console.log(add(3, 5)); // Answer : 8


// INFO: Second Quiz 
function greet() {
    console.log("Hello!");
}

let result = greet(); // Hello !
console.log(result);  // undefined


// INFO: Third Quiz
function multiply(x,y) {
    return;
    x * y;
}
console.log(multiply(4, 5)); // Answer : undefined


// INFO: Fourth Quiz 
function test() {
    return true;
    return false;
}
console.log(test()); // Answer : true 


// INFO: Fifth Quiz 
function checkNumber(num) {
    if(num > 10) {
        return "Greater than 10";
    }
    return "10 or less";
}
console.log(checkNumber(15));
console.log(checkNumber(8)); // Answer : Greater than 10   10 or less


// INFO: Sixth Quiz 
function returnObject() {
    return {
        name: "Alice"
    };
}
console.log(returnObject()); // Answer : { name: 'Alice' }


// INFO: Seventh Quiz 
function getMessage() {
    return {
        message: "Hello";
    }
};
console.log(getMessage()); // Answer : Error
