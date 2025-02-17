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
