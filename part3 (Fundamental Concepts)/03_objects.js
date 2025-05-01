// INFO: Objects

const user = {
    firstName: "Abdul",
    lastName: "Rafay",
    address: {
        country: "pakistan",
        city: "Islamabad",
        zipcode: 43434,
        moreDetails: {
            population: 12342323,
            area: "12 sq km"
        }
    }
};
console.log(user["firstName"]); // bracket notation
console.log(user.lastName); // dot notation

user.age = 12; // this is how you can add a value in object
console.log(user.age);
console.log(user);

// delete the property from object
delete user.firstName;

// how to access object in object
console.log(user.address.city);
console.log(user.address.moreDetails.population);
console.log(user);


// INFO: Object.seal
const sealObject = {
    name: "abdul rafay",
    age: 17,
    education: "FSC"
};
Object.seal(sealObject); // now we cannot add anything or delete anything from this sealObject // NOTE: we can change the key values of pre defined keys in object
console.log(sealObject.new = false);
console.log(sealObject);


// INFO: Object.freeze
const freezeObject = {
    name: "whoami",
    age: "don't know",
    location: "anonymous"
};
Object.freeze(freezeObject); // after using Object.freeze we cannot add, delete or change the pre defined key values in object fully locked
console.log(freezeObject.new = 21);
console.log(freezeObject);

// NOTE: (in) keyword in object
console.log("name" in freezeObject); // this is how we can check that the key is exists in object or not  // NOTE: we have to pass the key as string.


// Object Literal Syntax
const person = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log("Hello, I'm " + this.name);
    }
};

// Accessing Properties
console.log(person.name); // Alice
console.log(person['age']); // 25
person.greet(); // Hello, I'm Alice
console.log('name' in person); // true
console.log(person.hasOwnProperty('age')); // true


// Object Destructing
const user = {
    name: "Bob",
    age: 30,
    job: "Developer"
};
const { name, age, job: newJob } = user;
console.log(name); // Bob
console.log(age); // 30
console.log(newJob); // Developer
