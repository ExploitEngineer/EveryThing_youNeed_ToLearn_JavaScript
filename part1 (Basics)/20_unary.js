// Unary Operators in JavaScript

/*
+    Unary plus (converts operand to number)
-    Unary minus (negates the operand)
!    Logical NOT (inverts boolean)
delete Deletes a property from an object
void  Evaluates an expression and returns undefined
*/

// Unary plus
console.log(+'5');  // Output: 5 (string '5' converted to number)

// Unary minus
console.log(-5);    // Output: -5

// Logical NOT
console.log(!true); // Output: false

// delete
const obj = {a: 1, b: 2};
delete obj.a;
console.log(obj);   // Output: { b: 2 }

// void
console.log(void(0)); // Output: undefined
