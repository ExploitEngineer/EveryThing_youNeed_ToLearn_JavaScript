const fruits = ['Banana', 'Mango', 'Peach', 'Dates', 'Orange'];

fruits.forEach(function (a) {
    console.log(a);
});

console.log("***************");

fruits.forEach((a) => {
    console.log(a);
});

console.log("*******************");

function abc(elem) {
    console.log(elem);
};
fruits.forEach(abc);



// NOTE: Quizes for forEach loop 

// INFO: First Quiz 
const colors = ["Red", "Green", "Blue"];
colors.forEach((color) => {
    console.log(color);
}); // Answer : Red Green Blue


// INFO: Second Quiz 
const numbers = [1, 2, 3, 4];
const result = numbers.forEach(num => num * 2);
console.log(result); // Answer : undefined (cause forEach doesn't return anything)


// INFO: Third Quiz
let nums = [10, 20, 30];
nums.forEach((num, index, arr) => {
    arr[index] = num * 2;
})
console.log(nums); // Answer : 20 40 60 


// INFO: Fourth Quiz 
const items = ["A", "B", "c"];
items.forEach((item, index) => {
    console.log(index + ": " + item);
}) // Answer : 0: A   1: B   2: c


// INFO: Fifth Quiz 
const nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    if (num === 3) break;
    console.log(num);
}) // Answer : Error (cause break only works in loops and switch and case)


// INFO: Sixth Quiz
const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
    if (num % 2 === 0) return; // skips even numbers 
    console.log(num)
}) // Answer : 1 3 5
