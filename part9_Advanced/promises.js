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

const promise = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', () => {
        resolve('Promise Resolve');
    })
    rejectBtn.addEventListener('click', () => {
        reject('Promise Rejected');
    })
});

promise.then((data) => {
    console.log(data);
})
promise.catch((error) => {
    console.log(error);
})
promise.finally(() => {
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
