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
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says hello.`);
  }
}

class Developer extends User {
  constructor(name, language) {
    super(name); // calls the constructor of Person
    this.language = language;
  }

  code() {
    console.log(`${this.name} writes code in ${this.language}`);
  }
}

const dev = new Developer("Rafay", "JavaScript");
dev.speak(); // Rafay says hello.
dev.code(); // Rafay writes code in JavaScript

/*
INFO: What is static in classes ?
A static method or property belongs to the class itself, not to any object created from it.
*/

// Example
class Car {
  constructor(model) {
    this.model = model;
  }

  static company() {
    return "Toyota";
  }
}

const myCar = new Car("BMW");

console.log(Car.company()); // Toyota
console.log(myCar.company()); // Error: myCar.company is not a function


// INFO: get and set (Getters & Setters)

/*
INFO: What is getter ?
A getter allows you to access a property like a variable, but it actually runs a fucntion behind the scenes.
*/

/*
INFO: What is setter ?
A setter allows you to control how a property is set (add validation, logs, etc.)
*/

class Employee {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name is too short!");
      return;
    }
    this._name = value;
  }
}

const emp = new Employee("rafay");
console.log(emp.name); // RAFAY



