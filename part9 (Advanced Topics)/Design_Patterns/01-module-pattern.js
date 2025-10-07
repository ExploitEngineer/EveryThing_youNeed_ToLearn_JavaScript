/*
NOTE: Module Pattern
The Module Pattern in Javascript is a design pattern used to encapsulate private data and expose only public methods.
It uses closures to create private and public members, helping prevent global namespace pollution and allowing data privacy.
*/

const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function log(message) {
    console.log(`[Counter Log]: ${message}`);
  }

  // Public API (returning an object)
  return {
    increment: function () {
      count++;
      log(`Count increased to ${count}`);
    },
    decrement: function () {
      count--;
      log(`Count decreased to ${count}`);
    },
    getCount: function () {
      return count;
    },
  };
})();

// Usage
CounterModule.increment(); // [Counter Log]: Count increased to 1
CounterModule.increment(); // [Counter Log]: Count increased to 2
console.log(CounterModule.getCount()); // 2
CounterModule.decrement(); // [Counter Log]: Count decreased to 1
