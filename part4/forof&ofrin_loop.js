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
