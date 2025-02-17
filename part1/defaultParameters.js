function multiply(a, b = 2) {
    return console.log(a * b);
}
multiply(2);


function rollDie(numberOfSides = 6) {
    return console.log(Math.floor(Math.random() * numberOfSides) + 1);
}
rollDie(9);
