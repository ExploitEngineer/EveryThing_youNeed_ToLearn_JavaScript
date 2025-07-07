/*
INFO: Boolean Object
The Boolean object is a wrapper for true or false values. It represents a logical entity and is often used in conditions.
*/

// To create a boolean:
let a = true;
let b = new Boolean(false); // Boolean object (not recommended)

// Properties of Boolean
Boolean.prototype; // allows you to add methods to all Boolean instances.

// Methods of Boolean
let x = true;
console.log(x.toString()); // "true"
console.log(x.valueOf()); // true
