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


// NOTE: Call
// INFO: (call method allows an object to use the method of another object) Call is a function that helps you change the context of the invoking function. In other words, it helps repleace the value of "this" inside a function with whatever value you want. 
const person1 = {
    firstName : "Abdul",
    lastName : "Rafay",
    fullName : function (hometown){
        return this.firstName + " " + this.lastName + " " + hometown
    }
}

const person2 = {
    firstName : "shiraz",
    lastName : "khan",
}

const perosn3 = {
    firstName : "zain",
    lastName : "shah"
}

console.log(person1.fullName.call(person2, "Islamabad"));


// NOTE: Appy 
// INFO: this is actually the same as call method but what is the difference that when we use the call method we sperated the arguments using comma console.log(person1.fullName.call(person2, "Islamabad")); if i do this same thing in apply you can just inclose the arguments array thats the only difference between call and apply
console.log(person1.fullName.apply(person2, ["Islamabad"]));


// NOTE: Bind 
// INFO: Bind method is also same as call method just some little difference (bind method will invoke the function which is in our object and returning the function) and we can save that returning function in variable and use it anywhere it measn like that will not run the function automatically we will save the function in some variable and then we can call that function anytime.
const result = person1.fullName.bind(person2, "Islamabad");
console.log(result());
