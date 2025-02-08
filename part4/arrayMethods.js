// Length Method
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// toString() Method
const arr1 = [1, 2, 3, 4, 6];
console.log(arr1.toString());

// arrayat() Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(-1));

// Array.join() Method
const arr2 = [1, 2, 3, 4, 5];
const arr3 = ["whoami", "rafay"];
console.log(arr2.join());
console.log(arr3.join());

// Array.pop() Method
const arr4 = [1, 2, 3, 4, 5];
arr4.pop();
console.log(arr4);

// Array.push() Method
const arr5 = [5, 4, 3, 2, 1];
arr5.push(6);
console.log(arr5);

// Array.shift Method
const arr6 = [1, 2, 3, 4, 5];
arr6.shift();
console.log(arr6);

// Array.unshift Method
const arr7 = [1, 2, 3, 4, 5];
arr7.unshift(0);
console.log(arr7);

// Array delete Method
const arr8 = [1, 2, 3, 4, 5, 6];
delete arr8[2];
console.log(arr8);

// Array concat Method
const arr9 = [1, 2, 3, 4, 5];
const arr10 = [6, 7, 8, 9, 10];
const combined = arr9.concat(arr10);
console.log(combined);

// Array copyWithin Method
const arr11 = ["Banana", "Orange", "Apple", "Mango"];
arr11.copyWithin(2, 0);
console.log(arr11);

// Array flat Method
const arr12 = [1, 2, 3, 4, 5, [6, 7], [8, 9, [10]]];
const flatArray = arr12.flat(2);
console.log(flatArray);

// Array slice Method
const arr13 = [1, 2, 3, 4, 5];
const newarr13 = arr13.slice(1, 3);
console.log(newarr13);

// Array splice Method
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(2, 0, 6, 7);
arr14.splice(2, 1, 8, 9);
console.log(arr14);

// Array tospliced method
const arr15 = [1, 2, 6, 4, 5];
const newarr15 = arr15.toSpliced(2, 1, 3);
console.log(arr15);
console.log(newarr15);
