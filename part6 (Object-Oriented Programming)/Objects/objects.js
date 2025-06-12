/*
INFO: What are objects ?
Objects are collection of key-value pairs where the key (also called properties) are strings (or symbols), and values can be any data type, including other objects, functions, arrays, etc. 
*/



/*
INFO: Creating Objects
There are multiple ways to create objects in JS, but the two most common are: 
1. Object Literal 
2. Using [ new Object() ]
*/

// 1. Object Literal
const person = {
  name: "Rafay",
  age: 17,
  greet: function() {
    console.log("Hello!");
  }
};

// 2. Using new Object()
const user = new Object();
user.name = "Rafay";
user.age = 17;
user.greet = function() {
  console.log("Hello!");
};

/*
INFO: Accessing Properties and Methods 
you can access properties and methods in two ways: 
1. Dot notation
2. Bracket notation
*/

// 1. Dot notation
console.log(person.name);
person.greet();

// 2. Bracket notation 
console.log(person["age"]);
person["greet"]();

/*
INFO: Nested Objects 
Objects can have other objects as properties, creating nested structures.
*/

const person1 = {
  name: "Rafay",
  address: {
    city: "New York",
    zip: 1001
  }
};
console.log(person.address.city);
