// strings_methods&properties.js

// INFO: String Methods & Properties in JavaScript

/*
Strings in JavaScript are sequences of characters and are indexed starting from 0.
This means you can access individual characters using bracket notation.

Example:
"Hello World"[1]  // returns "e"
*/

// Accessing characters by index
let message = "Hello World";
console.log(message[4]); // Output: o

// Properties
// NOTE: The main property of strings is 'length' which returns the number of characters in the string.
console.log(message.length); // Output: 11

// Methods without arguments

// Convert to uppercase
console.log(message.toUpperCase()); // Output: "HELLO WORLD"

// Convert to lowercase
console.log(message.toLowerCase()); // Output: "hello world"

// Remove whitespace from both ends
let newMessage = "    hi this is me .         ";
console.log(newMessage.trim()); // Output: "hi this is me ."
console.log(newMessage.trimStart()); // Removes only the starting spaces
console.log(newMessage.trimEnd()); // Removes only the ending spaces

// Methods with arguments

// Check if string includes substring
console.log(message.includes("Hello")); // Output: true

// Get index of first occurrence of character/string
console.log(message.indexOf("e")); // Output: 1

// Replace first occurrence of substring
console.log(message.replace("Hello", "Hi")); // Output: "Hi World"

// Replace all occurrences (ES2021 feature)
console.log("Hello Hello".replaceAll("l", "L")); // Output: "HeLLo HeLLo"

// Concatenate strings
console.log(message.concat(" " + "Everyone")); // Output: "Hello World Everyone"

// Pad string from start to reach a certain length
let number = "1234";
console.log(number.padStart(11, "*")); // Output: *******1234

// Pad string from end to reach a certain length
console.log(number.padEnd(12, "-")); // Output: 1234--------

// Get character at specific index
console.log(message.charAt(1)); // Output: "e"

// Get Unicode value of character at specific index
console.log(message.charCodeAt(0)); // Output: 72 (Unicode for 'H')

// Split string into array based on separator
console.log(message.split(" ")); // Output: [ 'Hello', 'World' ]

// String Template Literals
const age = 17;
console.log(`I am ${age} years old`); // Output: "I am 17 years old"

// Multi-line strings using template literals
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

/*
Summary:

Property:
- length

Methods (no argument):
- toUpperCase()
- toLowerCase()
- trim()
- trimStart()
- trimEnd()

Methods (with argument):
- includes(substring)
- indexOf(substring)
- replace(searchValue, newValue)
- replaceAll(searchValue, newValue)
- concat(string)
- padStart(targetLength, padString)
- padEnd(targetLength, padString)
- charAt(index)
- charCodeAt(index)
- split(separator)
- Template Literals with backticks for interpolation and multi-line strings
*/
