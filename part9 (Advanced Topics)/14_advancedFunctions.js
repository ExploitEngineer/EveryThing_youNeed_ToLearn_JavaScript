/*
parseInt(string, radix):

Parses a string and returns an integer
Takes an optional radix parameter (base of the number system, 2-36)
Stops parsing at the first non-numeric character
Best for extracting numbers from text or converting string numbers with specific bases
*/
console.log(parseInt("42px"));      // 42  (ignores "px")Page
console.log(parseInt("3.14"));      // 3   (ignores decimal part)
console.log(parseInt("0xFF", 16));  // 255 (hexadecimal)
console.log(parseInt("111", 2));    // 7   (binary)


/*
Number(value):

Converts the entire value to a number
Returns NaN if any part can't be converted
Preserves floating point values
Best for clean numeric conversion when you expect the entire string to be a valid number
*/
console.log(Number("42px"));        // NaN (can't convert "px")
console.log(Number("3.14"));        // 3.14 (keeps decimal)
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN


/*
parseFloat(string):

Parses a string and returns a floating-point number
Stops at first invalid character (like parseInt)
Always uses decimal (base 10)
*/
console.log(parseFloat("3.14"));    // 3.14
console.log(parseFloat("3.14.15")); // 3.14 (stops at second dot)


/*
String(value):

Converts any value to a string
Safer than .toString() (works on null/undefined)
*/
console.log(String(42));            // "42"
console.log(String(null));          // "null"
console.log(String(undefined));     // "undefined"


/*
Boolean(value):

Converts a value to boolean (true/false)
*/
console.log(Boolean(0));            // false
console.log(Boolean("hello"));      // true
console.log(Boolean(""));           // false


/*
Map and Set Data Structures

Map is a collection of key-value pairs where keys can be of any type (unlike objects where keys are strings or symbols).
Keys can be any data type (objects, functions, primitives)
*/
const userMap = new Map();

// Adding entries
userMap.set("id1", { name: "Alice", age: 25 });
userMap.set("id2", { name: "Bob", age: 30 });

// Getting values
userMap.get("id1");    // { name: "Alice", age: 25 }

// Checking if a key exists
userMap.has("id1");    // true

// Size property
userMap.size;          // 2

// Deletion
userMap.delete("id1"); // true

// Iteration
for (const [key, value] of userMap) {
    console.log(key, value);
}

// Methods
console.log(userMap.keys());        // Iterator of keys
console.log(userMap.values());      // Iterator of values
console.log(userMap.entries());     // Iterator of [key, value] pairs
console.log(userMap.clear());       // Removes all entries


/*
Set
Set is a collection of unique values of any type.
*/
const uniqueNumbers = new Set();

// Adding values
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(1); // Ignored (already exists)

// Checking if a value exists
uniqueNumbers.has(1);  // true

// Size property
uniqueNumbers.size;    // 2

// Deletion
uniqueNumbers.delete(1); // true

// Iteration
for (const value of uniqueNumbers) {
    console.log(value);
}

// Methods
uniqueNumbers.clear(); // Removes all values



// INFO: Array methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find - returns first element that passes a test
numbers.find(num => num > 3); // 4

// findIndex - returns index of first element that passes a test
numbers.findIndex(num => num > 3); // 3

// some - tests if at least one element passes a test
numbers.some(num => num > 4); // true

// every - tests if all elements pass a test
numbers.every(num => num > 0); // true

// flat - flattens nested arrays
const nested = [1, [2, [3, 4]]];
nested.flat(2); // [1, 2, 3, 4]

// flatMap - maps and flattens in one operation
const sentences = ["hello world", "goodbye all"];
sentences.flatMap(s => s.split(' ')); // ["hello", "world", "goodbye", "all"]


// Deep Copy
const user = {
    name: 'whoami',
    age: 17,
    address: {
        city: 'Islamabad'
    }
};

const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = 'Rawalpindi';

console.log(user);
console.log(deepCopy);


// Using a Deep Clone Function (Full Solution)
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle Object
    if (obj instanceof Object) {
        const copy = {};
        Object.keys(obj).forEach(key => {
            copy[key] = deepClone(obj[key]);
        });
        return copy;
    }

    throw new Error(`Unable to copy obj! Its type isn't supported.`);
}

const original = { /* complex object */ };
const copy = deepClone(original);
