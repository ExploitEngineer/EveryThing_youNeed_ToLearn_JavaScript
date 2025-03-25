const xhrBtn = document.getElementById("resolve-btn");

xhrBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.send()
    xhr.responseType = 'json'
    console.log(xhr.response);
    xhr.addEventListener('load', () => {
        console.log(JSON.parse(xhr.response));
    });
})
