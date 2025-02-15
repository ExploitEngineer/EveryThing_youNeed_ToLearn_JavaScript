// NOTE: shallow copy and deep copy

// INFO: Shallow copy hota hy jab app kisi object ko copy karain with object.assign ka though ya fir spread operator ke through, in dono in cases ma top level properties ho jati hn lakin kisi bhi nested object ki properties copy hony ki jaga reference pass kr dati han.

const fruits = ["Mango", "Apple", "Orange"];
const myFruits = fruits;
console.log(myFruits.push("Dates"));

console.log(fruits);
console.log(myFruits);


const user1 = {
    firstName: "Abdul",
    lastName: "rafay"
};
const user2 = user1;

user2.firstName = "whoami";
console.log(user2);
console.log(user1);


const username1 = "abdul rafay";
let username2 = username1;
username2 += " " + "whoami"

console.log(username1);
console.log(username2);

const obj = {
    name: "whoami",
    age: 17
};
const obj2 = { ...obj };
obj2.name = "nobody";
console.log(obj);
console.log(obj2);

const obj3 = {};
Object.assign(obj3, obj);
obj3.age = 18;
console.log(obj);
console.log(obj3);


const arr = ["whoami", "zain", "rafay"];

const arr1 = [...arr];
arr1.push("array1");

const arr2 = [].concat(arr);
arr2.push("array2");

const arr3 = arr.slice();
arr3.push("array3");

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);


// FIXME: How to do a Deep Copy
// INFO: There are two ways that i will gonna show you to do a deep copy
const object1 = {
    name: "rafay",
    age: 25,
    social: {
        facebook: {
            ac1: "someone@gmail.com",
            ac2: "somewhere@gmail.com"
        },
        twitter: {
            free: {
                ac1: "somewhere@gmail.com"
            },
            paid: {
                ac1: "paidaccount@gmail.com"
            }
        }
    }
}

const object2 = JSON.parse(JSON.stringify(object1));
object2.social.facebook.ac1 = "changed";
console.log(object1.social.facebook.ac1);
console.log(object2.social.facebook.ac1);
