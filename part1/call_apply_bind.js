let name = {
    firstName: "Abdul",
    lastName: "Rafay"
};

let printFullName = function (city, country) {
    console.log(this.firstName + " " + this.lastName + "from" + city + "," + country);
}

printFullName.call(name, "Islamabad", "Pakistan");

let name2 = {
    firstName: "Amir",
    lastName: "Khan"
}

// function borrowing
printFullName.call(name2, "karachi", "Pakistan");

// apply method
printFullName.apply(name2, ["Lahore", "Pakistan"]);

// bind method
let printMyName = printFullName.bind(name2, "peshawar", "Pakistan");
console.log(printMyName);
printMyName();
