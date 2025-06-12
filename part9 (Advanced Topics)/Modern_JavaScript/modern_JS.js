// INFO: ES6 Primitives & Meta Types 

/*
1. Symbols
Unique and immutable values, ideal for object keys that shouldn't collide.
*/
const id = Symbol("userID");
obj[id] = 123;

/*
2. BigInt
For integer values beyond Number.MAX_SAFE_INTEGER
*/
const big = 9007199254740991n + 1n;
console.log(big); // 9007199254740992n

/*
3. Sets
Stores unique values.
Good for deduplication
*/
const s = new Set([1, 2, 2, 4]);
console.log([...s]);

/*
4. Map
key-value store with any type as key (including objects)
*/
const m = new Map();
m.set({ id: 1 }, 'data');

/*
5. Proxy & Reflect
proxy lets you intercept operations like get/set
*/
const p = new Proxy({}, {
  get: (obj, prop) => prop in obj ? obj[prop] : 42
});
console.log(p.any); // 42

/*
6. Destructuring
Simplifies extracting values
*/
const { a, b } = obj;
const [x, y] = arr;

/*
7. Optional Chaning(?.)
Safely access nested properties or methods
*/
const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001
  }
};
console.log(user.address?.city); // "New York"
console.log(user.contact?.phone); // undefined (no error)

/*
8. Nullish (??)
Default only if value is null or undefined
*/
const n = val ?? "defalut";
