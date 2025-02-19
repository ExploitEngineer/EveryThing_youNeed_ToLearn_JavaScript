try {
    console.log(a);
} catch (err) {
    console.log(err);
}

console.log("Hello WOrld");

fetch('https://dummyjson.com/products').then((res) => {
    return console.log(res.json());
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


async function makeAsyncRequest() {
    try {
        const url = 'https://dummyjson.com/products';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
makeAsyncRequest();
