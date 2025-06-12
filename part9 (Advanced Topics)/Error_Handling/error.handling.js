/* INFO: try, catch & finally
1. try: Block of code to test for errors.
2. catch(error): Handles the error object if one is thrown.
3. finally: Runs no matter what - useful for cleanup
*/

// syntax 
try {
  // code that might throw an error
} catch (error) {
  // code that runs if there's an error 
} finally {
  // Code that always runs, regardless of error 
}

// Example 
function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero!");
    return a / b;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  } finally {
    console.log("Division attempted.");
  }
}
divide(10, 0);
