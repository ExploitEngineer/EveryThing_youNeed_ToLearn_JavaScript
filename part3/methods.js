// INFO: Function inside an object is method 

const person = {
    firstName: "Abdul",
    lastName: "Rafay",
    age: 17,
    city: "Islamabad",
    introduce: function () {
        return console.log(`Hi, I'm ${this.firstName} ${this.lastName} from ${this.city} and I'm ${this.age} years old.`);
    }
}
person.introduce();
