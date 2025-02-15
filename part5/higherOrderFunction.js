// higher order function
function a(b) {
    console.log(b);
};
a('Hi');
a({ username: 'anurag', userAge: 50 });
a([1, 2, 3, 4, 5]);

console.log(a);

function sayHi() {
    console.log("Hiiiiiiiiiiiiiii");
};

a(sayHi);  // if we passed the function in the function then it is and higher order function

// Callbk function
// when we pass the function into argument of an another function then the function which takes the space of argument is called callback function.
a(function () {
    console.log('anonymous Function');
});

