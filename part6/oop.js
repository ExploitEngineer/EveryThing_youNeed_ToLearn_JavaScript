const user = {
    firstName: 'Abdul',
    lastName: 'Rafay',
    age: 25,
    getAgeYear: function () {
        return new Date().getFullYear() - user.age;
    }
}



// INFO: Factory Function
function createUser(firstName, lastName, age) {
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return user;
}
createUser('Abdul', 'Rafay', 17);
