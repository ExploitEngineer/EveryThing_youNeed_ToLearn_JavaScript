/* 1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
    Store all teas before `"chai"` in a new array named `selectedTeas`. */

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);


/* 2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`. */

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let e = 0; e < cities.length; e++) {
    if (cities[e] === 'Paris' || cities[e] === 'paris') {
        continue;
    }

    visitedCities.push(cities[e]);
}
console.log(visitedCities);


/* 3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
    Store the numbers before `4` in an array named `smallNumbers`. */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num == 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);


/* 4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.
    Store the other teas in an array named `preferredTeas`. */

let avaliableTeas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const t of avaliableTeas) {
    if (t === 'herbal tea' || t === 'Herbal tea') {
        continue;
    }
    preferredTeas.push(t);
}
console.log(preferredTeas);


/* 5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

    let citiesPopulation = {
        "London": 8900000,
        "New York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    };
*/

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityPopulations = {}
console.log(Object.values(citiesPopulation));


