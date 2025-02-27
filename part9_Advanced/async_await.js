// NOTE: An aysnc function is a special type of function that always returns a Promise. It allows to write asynchronous code in a cleaner, more readable way using await intead of .then() chains 


async function makeRequest() {
    console.log('helo');
    throw new Error('error in program');
}
makeRequest();


async function newRequest() {
    const url = 'https://dummyjson.com/products'
    const responsePromise = fetch(url)
    responsePromise.then((res) => {
        res.json().then((d) => {
            console.log(d);
        })
    })
}
newRequest();



async function request() {
    const url = 'https://dummyjson.com/products';
    const response = await fetch(url) // await returns the response of the fetched url means the result
    const data = response.json()
    console.log(data);
}
request();
