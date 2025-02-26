function add(a, b) {
    console.log(arguments);
    return a + b;
}
add(1, 5);

function addNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return console.log(sum);
}
addNums(1, 2, 3, 5, 5);


// NOTE: If we create a function that takes 2 parameters and then if we pass more arguments then parameters we are accepting like in this example: 4 arguments, the function just gonna ignore the arguments but the extra arguments will be captured using the (arguments) keyword. Not only the extra arguments but that will just captures all the arguments that we will pass in function and we can also access those arguments like that arguments[0]
function multiply(a, b) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    return a * b;
}
multiply(2, 2, 4, 4);

function infiniteArguments() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};

infiniteArguments(2, 4);
