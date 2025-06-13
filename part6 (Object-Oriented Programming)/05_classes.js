/*
INFO: What Are Classes in JavaScript ?
A class in Javascript is a way to create reusable blueprints for creating objects that share the same structure (properties) and behaviour (methods). It makes it easier to create & manage multiple similar objects.
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

  method1() { }
  method2() { }
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
In JavaScript classes, when you create an object using new, you get an instance of that class. The values and functions (methods) that belong to this instance are called instance properties and instance methods.
*/

// ✅ Instance Properties: Declared usually inside the constructor function using this.
class User {
  constructor(name) {
    this.name = name; // instance property
  }
}

// ✅ Instance Methods: These are functions defined in the class body and are available to all instances via the prototype.
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user1 = new User("Alice");
user1.greet(); // "Hi, I'm Alice"

/*
🔹 5. Inheritance in JavaScript (extends, super)
✅ extends
Used to create a class that inherits from another class.
✅ super()
Used to call the parent class’s constructor and access its methods.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Calls the parent constructor
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // "Buddy barks."

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
const newChild = new Child();
newChild.sayHello(); // Hello from child
// The Child class overrides the Parent method. If the method exists in both, the child version is used.

/*
🔹 7. Static Methods
Called on the class itself, not on instances.
Often used for utility/helper functions.
*/
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(3, 4)); // 7
// You can’t do new MathHelper().add() — that would throw an error.

/*
🔹 8. Private Fields and Methods (Truly Private)
Use # to declare private fields. These cannot be accessed or modified outside the class.
*/
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(pw) {
    return pw === this.#password;
  }
}

const newU = new User("Alice", "secret");
console.log(newU.#password); // ❌ Syntax Error
console.log(newU.checkPassword("secret")); // ✅ true

/*
🔹 9. Getters and Setters
getters => access properties
setters => change (mutate) them
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

const user = {
  firstName: "Abdul",
  lastName: "Rafay",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

user.fullName = "John Smith";
console.log(person);

/*
🔹 10. instanceof Operator
what is instace: When you create an object using new, like new User(), that object is an instance of the class.
Used to check if an object is an instance of a class or constructor.
*/
class A { }
class B extends A { }

let b = new B();
console.log(b instanceof B); // true — b is instance of B
console.log(b instanceof A); // true — B extends A
console.log(b instanceof Object); // true — All classes inherit from Object
