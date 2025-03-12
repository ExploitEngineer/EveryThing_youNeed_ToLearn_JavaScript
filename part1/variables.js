// using let (recommended for changeable values)
let age = 20; // Declared and initialized with value 20

// using const (recommended for constant values)
const pi = 3.14; // Declared and initialized. Value can't be changed.

// using var (old way, Avoid using it)
var name = "John";


// NOTE: Quiz Time

// INFO: First Quiz
let a = 10;
let b = 10;
console.log(a == b); // true
console.log(a === b); // false


// INFO: Second Quiz
let x = 3;
console.log(x++); // 3
console.log(++x); // 4


// INFO: Idenfity the primitive data types
let name = "Alice";
let age1 = 30;
let isHappy = true;
let user = { name: "Bob" };


// INFO: What will be the output
console.log(typeof NaN); // number
console.log(typeof null); // object


// INFO: What will be the ouput of the following code
let c = 10;
let e = c++;
let d = ++c;
console.log(a, b, c); // 12, 10, 11


// INFO: What will be the output of the following code ?
console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log(isNaN("Hello")); // true


// INFO: What will be the printed to the console?
let z = "10";
let u = 5;
console.log(x + y); // 105
console.log(+x + y); // 15


// INFO: What will be the output of the following code ?
let person = { name: "Alice" };
let anotherPerson = person;
anotherPerson.name = "Bob";
console.log(person.name); // "Bob"


// INFO: What is wrong with this code snippet?
const score;
score = 100;
console.log(score); // Syntax Error


// INFO: What will be the result of this operation ?
let num = 0.1 + 0.2;
console.log(num === 0.3); // false


// INFO: What will be the output of the following code ?
let n = null;
let i;
console.log(typeof x); // object
console.log(typeof y) // undefined


// INFO: What will be the output of the following code ?
console.log([] + []);
console.log([] + {});
console.log({} + []);


// INFO: What is the difference between these two?
let main = 0;
let actual = new Number(0);
console.log(main == actual); // false 
console.log(main === actual); // true


// INFO: What will be the output of this code ?
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2); // false, 0.30000000000000004
