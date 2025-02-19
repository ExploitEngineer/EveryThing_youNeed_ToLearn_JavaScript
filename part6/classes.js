// INFO: Classes in JavaScript

class CreateUser {

    constructor(a, b, c) {
        console.log('hi');
        console.log(this);
        console.log(a, b, c);
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const user1 = new CreateUser('Aman', 'Mishra', 32);
const user2 = new CreateUser('Abdul', 'Rafay', 17);
