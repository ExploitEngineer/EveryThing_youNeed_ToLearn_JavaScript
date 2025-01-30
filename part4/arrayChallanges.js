/* 1. Declare an arry named 'teaFlavors' that contains the strings `"green"`, `"black tea"` and `"oolong tea"`.
Access the first element of the array and store it in a variable named `firsttea`. */

let teaFlavors = ["greeen tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];


/* 2. Declare an array named `cites` containing `"London"`, `"Tokyo"`, `"paris"`, and `"New York"`.
Access the third element in the array and store it in a variable named `favoriteCity`. */


let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];


/* 3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
Change the second element of the array to `"jasmine tea"`. */

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "Jasmine tea";


/* 4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Islamabad"`.
Add `"Berlin"` to the array using the `push` method. */

let citiesVisited = ["Mumbai", "Islamabad"];
citiesVisited.push("Berlin");
console.log(citiesVisited);


/* 5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`. */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);


/* 6. You have an array named `popularTeas` containing `"green tea"`, and `"chai"`. Create a soft copy of this array named `softCopyTeas`. */

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);


/* 7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`, Create a hard copy of this array named `hardCopyCities`. */

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);


/* 8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `worldCities`. */

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);


/* 9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
Find the lenght of the array and store it in a variable named `menuLenght`. */

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLenght = teaMenu.length;
console.log(menuLenght);


/* 10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"` and `"Vancouver"`.
Check if `"London"` is in the array and store the result in a variable named `isLondonInList`. */

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
