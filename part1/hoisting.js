// INFO: Hoisting

console.log(username); // undefined
var username = "abdul rafay";

hi();
function hi() {
    console.log("Hello World");
};
