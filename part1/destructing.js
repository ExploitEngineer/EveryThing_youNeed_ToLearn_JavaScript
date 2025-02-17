const colors = ['Red', 'Green', 'Yellow', 'Black', 'Pink'];

// const color1 = colors[0]
// const color2 = colors[1];
// const colors3 = colors[2];

const [color1, color2] = colors;
console.log(color1);
console.log(color2);


// const [, , color3] = colors;
const {3: color3} = colors;
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
