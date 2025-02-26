const fruits = ['banana', 'Mango', 'Apple', 'Peach', 'Dates'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

console.log("*****************");

for (let fruit of fruits) {
    console.log(fruit);
};

console.log("********************");

const newString = "Abdul Rafay";
for (let string of newString) {
    console.log(string);
};

console.log("**************");


// for-in loop with objects 
const person = {name: "Alice", age: 25, city: "New York"};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for-in loop with arrays
const colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(`${index}: ${colors[index]}`)
}


// for-of work with array
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// for-of work with strings
const words = "JavaScript";
for (let char of words) {
    console.log(char);
}

// NOTE: We cannot use for-of loop in objects

const person = {
    firstName: "Abdul",
    lastName: "Rafay",
    age: 17
};

for (let key in person) {
    console.log(person[key]);
}

console.log("******************");

const personKeys = Object.keys(person);
for (const key of personKeys) {
    console.log(person[key]);
};




// NOTE: For-in loop Quizes

// INFO: First Quiz 
const user = {name: "John", age: 30, city: "New York"};
for (let key in user){
    console.log(key);
} // Answer : name age city


// INFO: Second Quiz 
const numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(index);
} // Answer : 0 1 2


// INFO: Third Quiz 
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(obj[key]);
} // Answer : 1 2 3


// INFO: Fourth Quiz 
const myObject = {first: "Hello", second: "World"};
for (let key in myObject) {
    console.log(`${key}: ${myObject.key}`)
} // Answer : first: undefined   second: undefined



// NOTE: For-of loop Quizes

// INFO: First Quiz 
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
} // Answer : 1 2 3 4 5


// INFO: Second Quiz 
const greeting = "Hi";
for (let char of greeting) {
    console.log(char);
} // Answer : H  I 


// INFO: Third Quiz 
const myArray = [10, 20, 30];
for (let value of myArray) {
    console.log(value * 2);
} // Answer : 20 40 60 
