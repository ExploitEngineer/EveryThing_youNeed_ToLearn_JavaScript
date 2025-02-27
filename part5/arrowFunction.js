// Function Declaration
/*
function square(num) {
    return num * num;
}
*/

// Function Expression
/*
const square = function (num) {
    return num * num;
};
*/

// Arrow Function Expression
/* const square = (num) => {
    return num * num;
} */

const square = (num) => num * num;
const add = (a, b) => a + b;

const random = () => Math.random()

setTimeout(() => {
    console.log("hi");
}, 2000);


// NOTE: Arrow Functions

// INFO: First Quiz 
const sum = (a, b) => a + b;
console.log(sum(3, 7)) // Answer : 10


// INFO: Second Quiz 
const person = {
    name: "John",
    greet: () => {
        console.log(`Hello, ${this.name}`)
    }
};
person.greet(); // Answer : Hello undefined
