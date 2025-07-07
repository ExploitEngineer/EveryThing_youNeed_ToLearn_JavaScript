/*
INFO: What is Recursion ?
Recursion is when a function calls itself to solve a smaller version of a problem until it reaches a base case (a condition to stop calling itself)
*/

function recursiveFunction() {
  if (baseCondition) {
    return result; // stop calling itself
  } else {
    return recursiveFunction(); // calls itself again
  }
}

// Example
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }

  console.log(n);
  countdown(n - 1); // recursive call
}
countdown(3);
