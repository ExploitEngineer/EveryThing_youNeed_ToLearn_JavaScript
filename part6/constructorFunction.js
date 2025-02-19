function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type) {
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`;
    }
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());


function Animal(species) {
    this.species = species;
}
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");


// INFO: This Keyword in JavaScript

// this in global space
console.log(this);  // globalObject

// this inside a function
function a() {
    // the value depends on strict / non strict mode
    console.log(this);
}
a(); // undefined

// this keyword value depends on how this is called (window)
window.a(); // window Object

// this inside a object's method
const student = {
    name: "Abdul Rafay",
    age: 17,
    printName: function () {
        console.log(this);
    },
};
student.printName();


const student2 = {
    name: "dipika",
};

student.printName.call(student2);
// call apply bind methods (sharing methods)
