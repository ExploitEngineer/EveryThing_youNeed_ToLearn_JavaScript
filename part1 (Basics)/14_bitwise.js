// Bitwise Operator
/*
<<      Shifts the bits to left
>>      Shifts the bits to right
~       Bitwise inversion (one's complement)
&       Bitwise logical AND
|       Bitwise logical OR
^       Bitwise exclusive or
*/

/*
<<  (Left Shift)
Shifts bits to the left, adding zeros from the right.
Example:
5 << 1 = 10
(5 in binary: 0101 → shifted left: 1010 → 10 in decimal)
*/
console.log(5 << 1); // Output: 10

/*
>>  (Right Shift)
Shifts bits to the right, keeping the sign (for signed numbers).
Example:
10 >> 1 = 5
(10 in binary: 1010 → shifted right: 0101 → 5 in decimal)
*/
console.log(10 >> 1); // Output: 5

/*
~  (Bitwise NOT)
Inverts the bits (one's complement).
Example:
~5 = -6
(5 in binary: 0000000000000101 → inverted: 1111111111111010 → -6 in decimal)
*/
console.log(~5); // Output: -6

/*
&  (Bitwise AND)
Compares each bit of two numbers, returns 1 only if both bits are 1.
Example:
5 & 3 = 1
(5: 0101, 3: 0011 → result: 0001)
*/
console.log(5 & 3); // Output: 1

/*
|  (Bitwise OR)
Compares each bit, returns 1 if either bit is 1.
Example:
5 | 3 = 7
(5: 0101, 3: 0011 → result: 0111)
*/
console.log(5 | 3); // Output: 7

/*
^  (Bitwise XOR)
Returns 1 if bits are different, 0 if same.
Example:
5 ^ 3 = 6
(5: 0101, 3: 0011 → result: 0110)
*/
console.log(5 ^ 3); // Output: 6
