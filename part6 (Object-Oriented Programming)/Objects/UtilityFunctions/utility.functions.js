// INFO: Objects Utility Functions

/*
INFO: 1. Object.keys(obj)
Returns an array of the object's own enumerable property names (keys).
*/
const user = {
  name: "rafay",
  age: 17,
  city: "Islamabad"
};
console.log(Object.keys(user));

/*
INFO: 2. Object.values(obj)
Returns an array of the object's own enumerable property values.
*/
console.log(Object.values(user));

/*
INFO: 3. Object.entries(obj)
Returns an array of the object's own enumberable property [key, value] pairs as arrays.
*/
console.log(Obbject.entries(user));

/*
INFO: 4. Object.assign(target, ...sources)
Copies enumerable properties from one or more source objects to a target object and returns the target object. Useful for cloning or merging objects.
*/
const target = {
  a: 1,
};
const source = {
  b: 2,
  c: 3
};
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget); // same as target

/*
INFO: 5. Object.freeze(obj)
Makes an object immutable - properties cannot be added, deleted, or changed.
*/
const config = {
  debug: true,
};
Object.freeze(config);

/*
INFO: 6. Object.seal(obj)
Prevents adding or deleting properties but allows modifying existing properties
*/
const profile = {
  name: "Rafay",
};
Object.seal(profile);
profile.name = "Zain";
console.log(profile);

/*
INFO: Object.hasOwn(obj, "property")
Checks if an object has a specific property
*/
const person = {
  name: "rafay",
  age: 20
};
console.log(Object.hasOwn(person, "age")); // true
