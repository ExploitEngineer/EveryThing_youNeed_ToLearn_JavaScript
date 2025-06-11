// Ternary Operator in JavaScript

/*
? :   Ternary conditional operator
Syntax: condition ? expressionIfTrue : expressionIfFalse
Returns one of two expressions based on a condition.
*/

const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes


/*
? : Nested Ternary conditional operator 
Nested ternary means using a ternary inside another ternary.
Useful when you have multiple conditions to check.
*/

const userAge = 20;

const status = userAge < 13
  ? "Child"
  : userAge < 18
    ? "Teenager"
    : userAge < 60
      ? "Adult"
      : "Senior";

console.log(status); // Output: Adult

