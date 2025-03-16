// JavaScript Arrays
const cars = ["Saab", "Volvo", "BWN"];

const newCars = [];
newCars[0] = "Saab";
newCars[1] = "Volvo";
newCars[2] = "BWN";
console.log(newCars);

// Using the JavaScript keyword new
const cars1 = new Array("hello", "hi", "new");
console.log(cars1);

// Accessing Array Elements
const flowers = ["rose", "jasmine", "sunflower"];
console.log(flowers[1]);

// Changing an Array element
flowers[0] = "newFlower"
console.log(flowers);


// INFO: Arrays
const fruitsCollection = ["Apple", "Banana", "Grapes", "Mango", { name: "whoami", newobj: { age: 25 } }, [1, 2, 3]];
console.log(fruitsCollection[2] = "Dates");
console.log(fruitsCollection);

// how to add value in array
console.log(fruitsCollection[6] = "Orange");
console.log(fruitsCollection[fruitsCollection.length] = "newFruit");
console.log(fruitsCollection.push("Yummy"));
console.log(fruitsCollection.unshift("First Fruit"));
console.log(fruitsCollection);

// how to delete a value from array
console.log(fruitsCollection.pop());
console.log(fruitsCollection);


// Map
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Filter
const even = numbers.filter(num => num % 2 === 0);
console.log(`${even}: Even`);

// Reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// ForEach
numbers.forEach(num => console.log(num));

// find / findIndex
const found = numbers.find(num => num > 1);
console.log(found);

// every / some
console.log(numbers.every(num => num > 0)); // true
console.log(numbers.some(num => num > 0)); // true

// concat
const moreNumbers = [4, 5];
const combined = numbers.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 4, 5];

// slice
console.log(numbers.slice(0, 2)); // [1, 2]

// splce
numbers.splice(1, 1, 10);
console.log(numbers); // [1, 10, 3]

// flat
const nested = [1, [2, 3], [4, 5]];
console.log(nested.flat()); // [1, 2, 3, 4, 5];

// includes
console.log(numbers.includes(10)); // true


// INFO: Array Destructing
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// INFO: Spread & Rest Operators
// Spread
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]

// Rest
function sum(...args) {
    return age.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6


// INFO: Object & Array Combination
const user = {
    name: "Alice",
    hobbies: ["Reading", "Gaming"]
};
const { name, hobbies: [hobby1, hobby2] } = user;
console.log(name); // Alice
console.log(hobby1); // Reading
console.log(hobby2); // Gaming


// INFO: Advanced Array Things 
