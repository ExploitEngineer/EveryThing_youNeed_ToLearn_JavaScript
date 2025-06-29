/*
🌟 Object-Oriented Programming (OOP) in JavaScript
OOP is a programming paradigm based on the concept of objects, which contain data (properties) and methods (functions) to manipulate that data.

📌 Core Concepts of OOP

Classes & Objects
Encapsulation
Inheritance
Polymorphism
Abstraction
*/

/*
✅ 1. Classes & Objects
Classes
A blueprint for creating objects (like a template).
*/
class Person {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age;
  }

  greet() {
    // Method
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

// Creating Objects (instances)
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.

/*
✅ 2. Encapsulation
Hiding the internal state of an object and only exposing necessary parts.
In JavaScript, we use private fields (#) to implement encapsulation.
*/
class Car {
  #engine; // Private property

  constructor(model, engine) {
    this.model = model;
    this.engine = engine;
  }

  startEngine() {
    console.log(`Starting the ${this.#engine} engine of ${this.model}.`);
  }
}

const myCar = new Car("Tesla", "Electric");
myCar.startEngine(); // Startng the Electric engine of Tesla.
console.log(myCar.#engine); // Error private field

/*
✅ 3. Inheritance
Creating new classes from existing ones (Parent-Child relationship).
Super keyword is used to call the constructor of the parent class.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent contructor
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.makeSound(); // Buddy barks.

/*
✅ 4. Polymorphism
The ability of objects to take on many forms.
A child class can have a method with the same name as the parent class (Method Overriding).
*/
class Shape {
  draw() {
    console.log("Drawing a shape.");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle.");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square.");
  }
}

const shapes = [new Circle(), new Square(), new Shape()];

shapes.forEach((shape) => shape.draw());
// Output:
// Drawing a circle.
// Drawing a square.
// Drawing a shape.

/*
✅ 5. Abstraction
Hiding complexity by exposing only necessary details.
JavaScript doesn't have true abstraction but we can achieve it using classes, interfaces (via TypeScript), and encapsulation.
*/
class User {
  constructor(username, password) {
    this.username = username;
    this.#password = password; // Private field
  }

  #encryptPassword() {
    // Private method
    return this.#password.split("").reverse().join("");
  }

  getEncryptedPassword() {
    return this.#encryptPassword();
  }
}

const user1 = new User("Alice", "mypassword");
console.log(user1.getEncryptedPassword()); // drowssapym

/*
🔥 Summary of Important Things to Remember:
Classes are templates for creating objects.
Encapsulation protects data by hiding it within classes.
Inheritance allows extending classes to avoid repetition.
Polymorphism allows overriding methods for different behaviors.
Abstraction simplifies usage by hiding complex details.
Getters & Setters provide controlled access to properties.
*/

// INFO: First Quiz
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Brand: [${this.brand}], Model: [${this.model}]`);
  }
}

const car = new Car("Toyota", "Coralla");
car.displayInfo(); // Brand: [Toyota], Model: [Coralla]
