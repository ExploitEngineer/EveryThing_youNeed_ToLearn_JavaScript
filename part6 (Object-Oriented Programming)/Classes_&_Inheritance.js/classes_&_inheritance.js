/*
INFO: What are classes in JavaScript ?
A class in JavaScript is a way to create reusable blueprints for creating objects that share the same strcture (properties) and behavior (methods). It makes it easier to create and manage multiple similar objects.
*/

// This is blueprint (class) for making "Person" objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// creating actual people (objects) from the blueprint
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice

/*
1. constructor() is a special method that runs when an object is created.
2. this refers to the new object being created.
3. greet() is method that belongs to the class.
*/

/*
INFO: Inheritance (Extending a Class)
Inheritance allows one class to inherit from another class.
*/

// Example
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} says hello. And his age is ${this.age}`);
  }
}

class Developer extends User {
  constructor(name, age, language) {
    super(name, age); // calls the constructor of Person & super must be called once.
    this.language = language;
  }

  code() {
    console.log(`${this.name} writes code in ${this.language} & his age is ${this.age}`);
  }
}

const dev = new Developer("Rafay", "JavaScript");
dev.speak(); // Rafay says hello.
dev.code(); // Rafay writes code in JavaScript

/*
INFO: What is static keyword in classes ?
The static keyword in javascript classes is used to define properties or methods that belongs to the class itself, not to instances of the clases. Static members are accessed directly via the class name, not through an instance.
*/

// Example
class Car {
  static count = 0;

  constructor(model) {
    this.model = model;
    Car.count++
  }

  static company() {
    return "Toyota";
  }

  static getCount() {
    return Car.count;
  }
}

console.log(Car.count); // 1
const myCar = new Car("BMW");

console.log(Car.company()); // Toyota
console.log(Car.getCount()); // 2
console.log(myCar.company()); // Error: myCar.company is not a function


/* INFO: get and set (Getters & Setters)
Getters and setters in javascript are special methods that allow you to define custom behaviour when accessing or setting object properties.
*/

/*
INFO: What is getter ?
get lets you retrieve (read) a property like a variable, but it's actually a function.
*/

/*
INFO: What is setter ?
set lets you update (write) a property like a variable, but with custom logic behind it.
*/

// Syntax
class MyClass {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

// Convention: Use an underscore _name to store the actual value so it doesn't clash with the getter/setter.

// Example
class Character {
  constructor(age) {
    this._age = age;
  }

  get age() {
    console.log("Getting age...");
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative.");
      return;
    }
    console.log("Setting age...");
    this._age = value;
  }
}

const char = new Character(17);

console.log(char.age); // Getting age... -> 17
char.age = 30; // Setting age...
console.log(char.age); // Getting age... -> 30

char.age = -5; // Age cannot be negative.
console.log(char.age); // Getting age... -> 30 (unchanged)


// Example of call concepts
class Gadget {
  static totalGadgets = 0;

  constructor(name, price) {
    this._name = name;
    this._price = price;
    Gadget.totalGadgets++;
  }

  get name() {
    console.log("Reading name...");
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Invalid name.");
      return;
    }
    console.log("Setting name...");
    this._name = value;
  }

  get price() {
    console.log("Reading price...");
    return this._price;
  }

  set price(value) {
    if (value < 0) {
      console.log("Price cannot be negative.");
      return;
    }
    this._price = value;
  }

  static getTotalGadgets() {
    return Gadget.totalGadgets;
  }

  describe() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

class Smartphone extends Gadget {
  constructor(name, price, os) {
    super(name, price);
    this._os = os;
  }

  get os() {
    console.log("Reading os...");
    return this._os;
  }

  set os(value) {
    if (!value) {
      console.log("OS cannot be empty.");
      return;
    }
    this._os = value;
  }

  describe() {
    console.log(`${this.name} runs an ${this.os} and costs ${this.price}`);
  }
}

const g1 = new Gadget("Bluetooth Speaker", 50);
const phone1 = new Smartphone("Iphone 16 pro max", 49999, "unix");
const phone2 = new Smartphone("Galaxy S22", 999, "Android");

phone1.price = -100; // Invalid
phone1.price = 899;
phone2.name = ""; // Invalid
phone2.name = "Iphone 14 Pro";

g1.describe();
phone1.describe();
phone2.describe();

console.log(Gadget.getTotalGadgets()); // 3
