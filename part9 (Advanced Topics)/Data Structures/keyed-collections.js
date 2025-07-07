/*
INFO: Keyed Collection in JavaScript
Keyed Collection are special objects for storing collections of data using keys (like a map or a set).
There are 4 types:
*/

/*
INFO: 1. Map
Stores key-value pairs.
Keys can be any type (object, string, number, etc.)
Maintains insertion order
*/
let collection = new Map();

collection.set("key", 100);
collection.set(window, 200);
collection.set(5, 300);

console.log(collection.get(window));
console.log(collection.size);
collection.delete(window);
console.log(collection.size);
collection.clear();
console.log(collection.size);
console.log(collection.keys());
console.log(collection.values());

let coll = new Map([
  ["key", 100],
  [window, 200],
  [5, 3],
]);
console.log(coll.get("key"));
console.log(coll.get(window));
console.log(coll.get(5));

/*
INFO: 2. WeakMap
Like Map, but:
Only objects as keys
Keys are weakly referenced (don't prevent garbage collection)
Not iterable (you can't loop through it)
*/
let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj, "data");

/*
INFO: 3. Set
A collection of unique values
Can store any type of value
No duplicate elements
*/
let set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate, ignored
console.log(set); // Set(2) {1, 2}

/*
INFO: WeakSet
Let Set, but:
Only stores objects
Objects are weakly held
Not iterable
*/
let object = {};
let weakSet = new WeakSet();
weakSet.add(obj);
