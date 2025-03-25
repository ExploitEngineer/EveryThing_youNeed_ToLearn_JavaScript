// INFO: String Methods & Properties
// Before starting string methods and properties we need to know that strings are indexed. So basically we can access only single character of a string by doing something like this.

// Expression: "Hello World"[1]
// Result: "e"

let message = "Hello World";
let message1 = "Hello";
let number = '1234';
console.log(message[4]);


// Properties
// NOTE: There is only one property for string (which is length)
console.log(message.length);

// Methods without argument
console.log(message.toUpperCase());
console.log(message.toLowerCase());

let newMessage = "    hi this is me .         ";
console.log(newMessage.trim());
console.log(newMessage.trimStart());
console.log(newMessage.trimEnd());

// Methods with argument
console.log(message.includes("Hello"));
console.log(message.indexOf("e"));
console.log(message.replace('Hello', 'Hi'));
console.log(message1.replaceAll('l', 'L'));
console.log(message.concat(' ' + message1));
console.log(number.padStart(11, '*'));
console.log(number.padEnd(12, "-"));
console.log(message.charAt(1));
console.log(message.charCodeAt(0));
console.log(message.split(' '));


// String Template Literals
const templateString = 17;
console.log(`I am ${templateString} years old`);
