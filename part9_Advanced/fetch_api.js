fetch('https://dummyjson.com/products').then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
})
