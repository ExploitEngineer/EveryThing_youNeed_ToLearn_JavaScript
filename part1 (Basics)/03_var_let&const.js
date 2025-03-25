// In JavaScript let, var & const are used to declare variables, but they have key differences in scope, re-declaration, hoisting, and mutability.

// NOTE: var (Function - scoped, Hoisted, Can be re-declared)
function example1() {
    var x = 10;
    if (true) {
        var x = 20; // same variable (not block - scoped)
        console.log(x); // 20
    }
    console.log(x); // 20 (changed inside the block)
}
example1();

// NOTE: let (Block - scoped, Hoisted but not initalized, Cannot be re-declared)
function example2() {
    let y = 10;
    if (true) {
        let y = 20; //  Different variable (block - scoped)
        console.log(y); // 20
    }
    console.log(y); // 10 (original value)
}
example2()

// NOTE: const (Block - scoped, Hoisted but not Initalized, Immutable)
const z = 10;
z = 20; // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed (object properties can change)

console.log(obj.name); // Bob
