// Destructing 

let arr = [3, 5];
// no need to use this 
let a = arr[0];
let b = arr[1];
// instead use this (this is the new feature of ES6)
let [a, b] = arr;
cosnole.log(a, b);

// you can also use ...spread operator with this like this 
let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8 , 9 , 10];
let [a, b, c, ...rest];
console.log(a, b, c, ...rest);



const colors = ['Red', 'Green', 'Yellow', 'Black', 'Pink'];
// const color1 = colors[0]
// const color2 = colors[1];
// const colors3 = colors[2];
const [color1, color2] = colors;
console.log(color1);
console.log(color2);



// You can also do this with objects
// const [, , color3] = colors;
const { 3: color3 } = colors;
console.log(color3);


const user = {
    name: 'whoami',
    age: 25,
    address: {
        city: 'Islamabad',
        state: 'Banglore'
    }
}

// const age = user.age;
// const name = user.name;

const { name, age } = user;
const { address: { city } } = user;
console.log(name, age, city);


const obj = {
    name: "whoami",
    id: 1111
};

const { name, id } = user2;




// how to convert array to object
let arr1 = [1, 2, 3];
let obj1 = {...arr1};
