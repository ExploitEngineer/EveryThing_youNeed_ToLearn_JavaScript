// JavaScript Arrays
const cars = ["Saab", "Volvo", "BWN"];

const newCars = [];
newCars[0] = "Saab";
newCars[1] = "Volvo";
newCars[2] = "BWW";
console.log(newCars);

// Using the JavaScript keyword new
const cars1 = new Array("hello", "hi", "new");
console.log(cars1);

// Accessing Array Elements
const flowers = ["rose", "jasmine", "sunflower"];
console.log(flowers[1]);

// Changing an Array element
flowers[0] = "newFlower";
console.log(flowers);

// INFO: Arrays
const fruitsCollection = [
  "Apple",
  "Banana",
  "Grapes",
  "Mango",
  { name: "whoami", newobj: { age: 25 } },
  [1, 2, 3],
];
console.log((fruitsCollection[2] = "Dates"));
console.log(fruitsCollection);

// how to add value in array
console.log((fruitsCollection[6] = "Orange"));
console.log((fruitsCollection[fruitsCollection.length] = "newFruit"));
console.log(fruitsCollection.push("Yummy"));
console.log(fruitsCollection.unshift("First Fruit"));
console.log(fruitsCollection);

// how to delete a value from array
console.log(fruitsCollection.pop());
console.log(fruitsCollection.shift());
console.log(fruitsCollection);

// Map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Filter
const even = numbers.filter((num) => num % 2 === 0);
console.log(`${even}: Even`);

// Reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// ForEach
numbers.forEach((num) => console.log(num));

// find / findIndex
const found = numbers.find((num) => num > 1);
console.log(found);

const numberIndex = numbers.findIndex((num) => num > 2);
console.log(numberIndex);

// every / some
console.log(numbers.every((num) => num > 0)); // true
console.log(numbers.some((num) => num > 0)); // true

// concat
const moreNumbers = [4, 5];
const combined = numbers.concat(moreNumbers);
console.log(combined); // [1, 2, 3, 4, 5];

// slice
console.log(numbers.slice(0, 2)); // [1, 2]

// splice
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
  hobbies: ["Reading", "Gaming"],
};
const {
  name,
  hobbies: [hobby1, hobby2],
} = user;
console.log(name); // Alice
console.log(hobby1); // Reading
console.log(hobby2); // Gaming


// NOTE: What is an array-like object ? 
/*
An array-like object is a object that:-
1. Has a length property 
2. Has values stored at numeric indices like 0, 1, 2, etc.
3. But it's not a real array (doesn't have array methods like .map(), .forEach())
*/


// INFO: Advanced Array Utility Functions

/*
Array.from()
Converts array-like objects or iterables to real arrays.
*/

// Converting a string (array-like object) to an array
const str = "Hello";
const arrFromStr = Array.from(str);
console.log(arrFromStr); // ['H', 'e', 'l', 'l', 'o']

// Creating an array from a NodeList (array-like object)
const divs = document.querySelectorAll("div");
const divArray = Array.from(divs);
console.log(divArray); 

// Convert a Set to an Array and Double the Numbers 
const settings = {
  multiplier: 2,
};

const numbers = new Set([1, 2, 3, 4]);

const doubledArray = Array.from(numbers, function (value) {
  return value * this.multiplier;
}, settings);
console.log(doubledArray); // [2, 4, 6, 8]

/*
Array.of()
Creates arrays from arguments.
*/
const arr1 = Array.of(5); // [5] - A single element array.
const arr2 = Array.of(1, 2, 3); // [1, 2, 3] - Array from arguments.
console.log(arr1, arr2);

// Compare with Array()
console.log(Array(5)); // Creates an array with 5 empty slots (not useful).
console.log(Array(1, 2, 3)); // Same as Array.of(1, 2, 3)

/*
Array.isArray()
Checks if a value is a real array.
*/
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray({})); // false

// Checking a NodeList (which is array-like but not an array)
const divs1 = document.querySelectorAll("div");
console.log(Array.isArray(divs1)); // false

/*
Array.entries()
is a method is javascript that returns a new array iterator object containing key/value pairs of each index in the array. 
Each pair is returned in the format [index, value].
*/
const colors = ["red", "green", "blue"];
const iterator = colors.entries();

for (const [index, value] of iterator) {
  console.log(index, value);
}

// we can also use .next() method manually 
console.log(iterator.next()); // { value: [ 0, "red" ], done: false }
console.log(iterator.next().value; // [ 0, "red" ]

/*
Array.keys()
Returns an iterator of indices (keys).
*/
const arr4 = ["x", "y", "z"];
const keys = arr4.keys();

for (let key of keys) {
  console.log(key);
}
// Output:
// 0
// 1
// 2

/*
Array.values()
Returns an iterator of values.
*/
const arr5 = [10, 20, 30];
const values = arr5.values();

for (let value of values) {
  console.log(value);
}
// Output:
// 10
// 20
// 30

/*
Array.fill()
Fills an array with a specific value.
*/
const arr6 = new Array(5).fill(0); // Creates an array of length 5 and fills it with 0.
console.log(arr6); // [0, 0, 0, 0, 0]

// Partially filling an array
const arr7 = [1, 2, 3, 4, 5];
arr7.fill(9, 1, 3); // value, startIndex, endIndex
console.log(arr7); // [1, 9, 9, 4, 5]

/*
Array.copyWithin()
Copies part of the array to another location in the same array, without changing its length.
*/
const arr8 = [10, 20, 30, 40, 50];
arr8.copyWithin(0, 3); // target, startIndex
console.log(arr8); // [40, 50, 30, 40, 50]

const arr9 = [1, 2, 3, 4, 5];
arr9.copyWithin(1, 3, 5); // target, startIndex, endIndex
console.log(arr9); // [1, 4, 5, 4, 5]

// NOTE: Quizzes

// INFO: Quiz 1 Array.from()
const myString = "hello";
const result = Array.from(myString, (char) => char.toUpperCase());
console.log(result); // ['H', 'E', 'L', 'L', 'O']

// INFO: Quiz 2 Array.of()
const arr10 = Array.of(7, 8, 9);
console.log(arr10); // [7, 8, 9];

// INFO: Quiz 3 Array.isArray()
const test1 = Array.isArray([1, 2, 3]);
const test2 = Array.isArray({ 0: "a", 1: "b", length: 2 });
console.log(test1, test2); // true, false

// INFO: Quiz 4: Array.entries()
const arr11 = ["a", "b", "c"];
const iterator = arr.entries();
console.log(iterator.next().value);
console.log(iterator.next().value); // [0, 'a] [1, 'b]

// INFO: Quiz 5: Array.keys()
const arr12 = [10, 20, 30];
const newkeys = arr12.keys();

let result1 = [];
for (let key of newkeys) {
  result.push(key);
}
console.log(result); // [0, 1 ,2];

// INFO: Quiz 6: Array.values()
const arr13 = ["x", "y", "z"];
const newvalues = arr.values();

let result2 = [];
for (let value of newvalues) {
  result.push(value);
}
console.log(result); // ['x', 'y', 'z']

// INFO: Quiz 7: Array.fill()
const arr14 = [1, 2, 3, 4, 5];
arr14.fill(0, 2, 4);
console.log(arr14); // [1, 2, 0, 0, 5]

// INFO: Array.copyWithin()
const arr15 = [1, 2, 3, 4, 5];
arr15.copyWithin(2, 0, 2);
console.log(arr15); // [1, 2, 1, 2, 5]
