/*
INFO: String Object
String is a build-in-object that allows you to work with text.
*/

/*
A string can be created using:
- String literal: "hello"
- String constructor: new String("hello") (not recommended)
*/
let str1 = "hello";
let str2 = new String("hello");

// Properties of String
let str = "hello";
str.length; // 5

// Methods of String
// - Character Access
str.charAt(index); // returns character at a position
str.charCodeAt(index); // Unicode of character at position
str.codePointAt(index); // Full Unicode code point (for emojis, etc.)

// - Searching
str.indexOf("h"); // finds position of first match
str.lastIndexOf("l"); // finds position of last match
str.includes("o"); // returns true if text if found
str.startsWith("h"); // checks if string starts with given text
str.endsWith("o"); // checks if string ends with given text

// - Modify / Extract
str.slice(0, 2); // extracts part of string
str.substring(0, 2); // similar to slice but no negatives
str.replace("a", "b"); // replaces first match
str.replaceAll("a", "b"); // replaces all matches
str.toUpperCase();
str.toLowerCase();
str.repeat(3); // repeats the string n times
str.trim() && str.trimStart() && str.trimEnd(); // removes spaces

// - Conversion
str.split(" "); // converts string to array
str.toString(); // returns string version
str.valueOf(); // returns primitive value
str.padStart(11, "*") && str.padEnd(12, "$"); // Pads string
