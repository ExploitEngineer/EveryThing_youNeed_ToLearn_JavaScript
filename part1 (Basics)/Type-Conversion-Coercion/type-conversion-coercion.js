/*
INFO: What is Type Conversion ?
Changing one data type into another.
Happens in two ways:
1. Explicit (Manual) - You converts it yourself
2. Implicit (Automatic) - Js does it for you
*/

// Explicit Conversion (Manual)
String(123); // "123"
Number("123"); // 123
Boolean(0); // false

// Implicit Conversion (Automatic by JS)
"5" + 1; // "51"
true + "3"; // "true3"
"5" - 1; // 4
true + true; // 2
false - true; // -1
if ("") {
} // false
if ("hello") {
} // true
[] + []; // ""
[] + {}; // "[object object]"
{
}
+[]; // 0
true + true; // 2
null + 1; // 1
undefined + 1; // NaN
