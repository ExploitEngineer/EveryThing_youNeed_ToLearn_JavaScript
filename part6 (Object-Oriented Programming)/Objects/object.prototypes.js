/*
INFO: Object Prototypes
JavaScript is prototype-based, meaning every object in JavaScript has a hidden [[prototype]] (commonly accessed via .prototype or __proto__).
*/

/*
INFO: What is prototype ?
A prototype is just another object that your object inherits properties and methods from.
*/
const user = {
  name: "Rafay",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const admin = {
  role: "admin",
};

admin.__proto__ = user;

console.log(admin.name); // "Rafay"
admin.greet(); // Hello, Rafay

/*
INFO: Object.getPrototypeOf() and Object.setPrototypeOf()
you can also get/set protypes programmatically:
*/
Object.getPrototypeOf(admin); // user
Object.setPrototypeOf(admin, {}); // change prototype

/*
INFO: Object.prototype
Every object eventually links to Object.prototype, unless you create it with Object.create(null).
*/

/*
INFO: Prototype Chain
When you access a property:
1. Js looks at the object itself.
2. If not found, it looks in its prototype.
3. Then the prototype's prototype... and so on, until it hits null.
This is called Prototype Chain.
*/


