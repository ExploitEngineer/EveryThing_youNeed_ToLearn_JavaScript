/*
🔹 1. What Are Classes in JavaScript?
JavaScript classes are syntactic sugar over the existing prototype-based inheritance. Classes make it easier to structure code using constructors, methods, and inheritance, following familiar OOP patterns like in Java, C++, etc.
*/
class Person {
  constructor(name) {
    this.age = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.age}`);
  }
}
let person = new Person("Rafay");
person.greet();

// 🔹 2. Creating Classes
class className {
  constructor() {
    // setup
  }

  method1() {}
  method2() {}
}

class Animal {
  constructor(type) {
    this.type = type;
  }

  makeSound() {
    console.log(`${this.type} makes a sound`);
  }
}
const animal = new Animal("Dog");
animal.makeSound(); // Dog makes a sound

/*
🔹 3. Constructor Functions
The constructor() method is a special method used for:
    Initializing properties
    Automatically called when you create a new instance with new
*/
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    console.log(`${this.model} - ${this.year}`);
  }
}
const car = new Car("Supra", 2020);
car.details(); // Supra - 2020

/*
🔹 4. Instance Properties & Methods
    Instance properties are attached to (this) inside constructor.
    Instance methods are added to the prototype, not copied per instance.
*/
const car1 = new Car("Toyota", 2022);
console.log(car1.model); // Toyota
car1.details(); // Toyota - 2022

/*
🔹 5. Inheritance in JavaScript (extends, super)
✅ Basic Inheritance:
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls the parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rex", "Labrador");
d.speak(); // Rex barks.

/*
🔹 6. Method Overriding
When a subclass defines a method with the same name as in the superclass, it overrides it.
*/
class Parent {
  sayHello() {
    console.log("Hello from parent");
  }
}

class Child extends Parent {
  sayHello() {
    console.log("Hello from child");
  }
}

/*
🔹 7. Static Methods
Static methods are called on the class itself, not on instances.
*/
class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(4)); // 16

/*
🔹 8. Private Fields and Methods (Truly Private)
Introduced in ES2022, private fields start with #. They cannot be accessed outside the class.
*/
class Counter {
  #count = 0;

  increment() {
    this.#count++;
    console.log(this.#count);
  }
}

const c = new Counter();
c.increment(); // 1
// c.#count; // ❌ Error: Private field '#count' must be declared

/*
🔹 9. Getters and Setters
Allow controlled access to properties.
*/
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName.trim();
  }
}

let u = new User(" alice ");
console.log(u.name); // ALICE
u.name = "  Bob  ";
console.log(u.name); // BOB

/*
🔹 10. instanceof Operator
Used to check if an object is an instance of a class or constructor.
*/
class A {}
class B extends A {}

let b = new B();
console.log(b instanceof B); // true
console.log(b instanceof A); // true
console.log(b instanceof Object); // true
