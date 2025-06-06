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


const resolveBtn = document.getElementById("resolve-btn");
const rejectBtn = document.getElementById("reject-btn");

const promise1 = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', () => {
        resolve('Promise Resolve');
    })
    rejectBtn.addEventListener('click', () => {
        reject('Promise Rejected');
    })
});

promise1.then((data) => {
    console.log(data);
})
promise1.catch((error) => {
    console.log(error);
})
promise1.finally(() => {
    console.log('Finally');
})

console.log(promise);


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 5000);

    resolveBtn.addEventListener('click', () => {
        resolve('My promise is resolved');
    });

    rejectBtn.addEventListener('click', () => {
        reject('My promise is rejected');
    })
});
myPromise.then((data) => {
    console.log(`then statement run ${data}`);
}).catch((error) => {
    console.log(`error fetching data ${error}`);
})
console.log(myPromise);


// Creating another promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 4000);
})

p.then(() => {
    console.log('data fetched successfully');
}).catch(() => {
    console.log("Error fetching data");
}).finally(() => {
    console.log("Program completed");
})


// Best way to handle api using promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData("https://fakestoreapi.com/products")
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));





// NOTE: Promises Quizes

// INFO: First Quiz
let promise2 = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise2.then((result) => {
    console.log(result);
}) // Answer : Success!


// INFO: Second Quiz
let promise3 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});
promise3.catch((error) => {
    console.log(error);
}) // Answer : Something went wrong
