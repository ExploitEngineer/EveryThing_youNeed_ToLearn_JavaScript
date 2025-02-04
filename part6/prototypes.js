let computer = { cpu: 12 };
let lenovo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {};

// Old way not recommended :
console.log(`computer`, computer.__proto__);
console.log(lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
    driver: "AI",
};

// Right and latest way :
Object.setPrototypeOf(tesla, genericCar);
console.log(Object.getPrototypeOf(tesla));
