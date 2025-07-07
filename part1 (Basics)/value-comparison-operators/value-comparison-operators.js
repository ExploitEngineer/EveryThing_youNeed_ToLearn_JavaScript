/*
INFO: == (Equality - Loose Equality)
Checks if two values are equal after type coercion (i.e., javascript will try to convert the values to the same type before comparing)
*/
console.log(5 == "5"); // true (string '5' is coerced to number 5)
console.log(null == undefined); // true
console.log(0 == false); // true

/*
INFO: === (Strict Equality)
Compares both value and type
No type coercion - values must be the same type and value to be true
*/
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(null === undefined); // false
console.log(0 === false); // false

/*
INFO: Object.is() (SameValue comparison)
Similar to ===, but with two key differences:
*/
console.log(Object.is(5, 5)); // true
console.log(Object.is("5", 5)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
