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
