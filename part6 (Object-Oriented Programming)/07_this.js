/*
INFO: What is this ?
this refers to the context in which current code is running.
It can points to:
- an object
- window in browser
- undefined (in strict mode)
- anything depending on how the function is called
*/

/*
1. this in a Method (object Context)
When a function is called as a method of an object, this refers to that object.
*/

const user = {
  name: "rafay",
  greet() {
    console.log(this.name); // "rafay"
  },
};
user.greet();

/*
2. this in a Regular function
In regular function (not a method), this behaves differently:
*/
function show() {
  console.log(this); // window object
}
show();

/*
3. this Used Alone
When used alone outside of any function:
*/
console.log(this); // window object

/*
4. this in Event handlers
In DOM event handlers, this usually refers to the element that received the event.
*/
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // the button element <button>Click Me</button>
});

/*
5. this in Arrow Functions
Arrow functions do not have their own this. They inherit it from their lexical (outer) scope.
*/
const user1 = {
  name: "rafay",
  greet: function () {
    const inner = () => {
      console.log(this.name); // "rafay"
    };
    inner();
  },
};

user1.greet();
