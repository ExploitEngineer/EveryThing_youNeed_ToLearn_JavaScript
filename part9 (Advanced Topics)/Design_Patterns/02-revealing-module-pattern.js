/*
NOTE: Revealing Module Pattern
The Revealing Module Pattern is a cleaner version of the module pattern where you define all functions and variables in the private scope first, and then return an object that explicitly maps private members to public names.

This approach makes the code more readable and consistant because all functions are defined in one place and revealed at the end.
*/

const CartModule = (function () {
  // Private variables
  let cart = [];

  // Private functions
  function addItem(item) {
    cart.push(item);
  }

  function removeItem(item) {
    const index = cart.indexOf(item);
    if (index !== -1) cart.splice(index, 1);
  }

  function getCart() {
    return [...cart]; // return a copy
  }

  // Revealing the public API
  return {
    add: addItem,
    remove: removeItem,
    get: getCart,
  };
})();

// Usage
CartModule.add("Apple");
CartModule.add("Banana");
console.log(CartModule.get()); // ["Apple", "Banana"]
CartModule.remove("Apple");
console.log(CartModule.get()); // ["Banana"]
