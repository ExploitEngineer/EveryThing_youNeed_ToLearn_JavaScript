/*
INFO: What is a Generator ?
A generator is a special function that can pause and resume its execution using the yield keyword. It automatically creates an iterator.
*/

function* generatorName() {}
/*
- Its returns an iterator
- yield is used to pause and return values one at a time
- Your control flow manually with .next()
*/

// Example
function* nameGenerator() {
  yield "rafay";
  yield "ali";
  yield "john";
}

const gen = nameGenerator();

console.log(gen.next()); // {value: "rafay", done: false}
console.log(gen.next()); // {value: "ali", done: false}
console.log(gen.next()); // {value: "john", done: false}
console.log(gen.next()); // {value: "undefined", done true}
