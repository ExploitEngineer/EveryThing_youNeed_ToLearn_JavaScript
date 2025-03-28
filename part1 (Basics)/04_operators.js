// INFO: Operators in JavaScript

// NOTE: Comparison Operators
const user1 = 18;
const user2 = 20;
const user3 = '20';
const newNum1 = 8;
const newNum2 = 10;

console.log(user1 == user2); 
console.log(user2 === user3); 
console.log(user1 != user2);  
console.log(user1 !== user2);  
console.log(newNum1 > newNum2); 
console.log(newNum1 < newNum2);
console.log(newNum1 >= newNum2);
console.log(newNum2 <= newNum2);


// NOTE: Logical Operators
/*
&& (And)
|| (Or)
! (Not)
*/

console.log((5 < 7) && (4 < 8)); // if any one of the statment is false in (And) operator then the answer will bet false
console.log((5 > 9) || (5 < 10)); // if any one of the statment is ture in (Or) operator then the answer will be true
console.log(!true); // not operator converters the false into true and true into false
