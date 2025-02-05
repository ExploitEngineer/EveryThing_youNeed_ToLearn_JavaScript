function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            { success ? resolve("Data fetched successfully!") : reject("Error fetching data") }
        }, 3000);
    })
};

fetchData()
    .then((data) => {
        console.log(data);
        return `Whoami`.toLowerCase();
    })
    .then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })
