/*
🔹 1. Prototypes and Inheritance
✅ What is a Prototype?
Every JavaScript object has a hidden internal property [[Prototype]], which points to another object. That object is called its prototype.
    This is how inheritance works in JS — through the prototype chain.

🔄 Prototype Chain:
If a property or method is not found in an object, JavaScript looks up the prototype chain until it finds it or reaches null.
*/
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(rabbit.jumps); // true (own property)
console.log(rabbit.eats); // true (inherited from animal)
// Here, rabbit inherits from animal using __proto__.

/*
🔧 Real Prototypes:
Modern way to get/set prototype:
*/
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, prototypeObj);

/*
🔹 2. Object.create()
✅ What is it?
Object.create(proto) creates a new object and sets its prototype to the given object.
*/
let animal1 = {
  eats: true,
};

let dog = Object.create(animal1);
dog.barks = true;

console.log(dog.eats); // true (from prototype)
console.log(dog.barks); // true (own property)
