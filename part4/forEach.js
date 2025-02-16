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
