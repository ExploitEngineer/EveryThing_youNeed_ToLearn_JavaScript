/*
🔹 4. new keyword
✅ What does new do?
When you use new with a function, it becomes a constructor function, and JS does several things behind the scenes:
🔁 What happens with new:
*/
function Person(name) {
  this.name = name;
}

let p = new Person("John");

/*
This does:
    Creates a new empty object: {}
    Sets the prototype: p.__proto__ = Person.prototype
    Binds this inside the function to the new object.
    Returns the new object (unless the function returns something else explicitly).
✅ Example:
*/
function Car(model) {
  this.model = model;
}

let c1 = new Car("Toyota");
console.log(c1.model); // Toyota
