/*
📦 What we’ll do:
Call a fake API (https://jsonplaceholder.typicode.com/posts)

Use:
✅ fetch with .then() (Promise chaining)
✅ fetch with async/await
✅ axios with async/await
✅ try/catch error handling
✅ How to print data outside the function properly
*/


// 1. Fetch with .then() (Promise chaining)
function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json()) // this returns a promise
        .then((data) => {
            console.log("Data inside .then():", data);
            // you can work with "data" here
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
getPosts();
// ❗ You can't return data outside directly from .then(). You need to work with it inside or pass it to another function.


// 2. Fetch with async/await
async function getData() {
    try {
        const response = await fetch9("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Data inside async/await:", data);
        return data; // this is how we return it to use outside
    } catch (error) {
        console.error('Error:', error);
    }
}
getData().then((data) => {
    console.log("data outside function:", data);
});
// ✅ Use await for anything that returns a promise (like fetch() or .json()). This is cleaner and preferred in real-world production.


// 3. Axios with async/await (used in most real-world projects)
import axios from 'axios';
async function getDataAxios() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const data = response.data;
        console.log("Data from axios:", data);
        return data;
    } catch (error) {
        console.error("Axios error:", error);
    }
}
getDataAxios().then((posts) => {
    console.log("Axios: Data outside function:", posts);
});
/*
✅ In real-world projects like React, axios is used more because:
Built-in timeout
Better error handling
Interceptors (advanced stuff)
*/


// 💣 KEY LEARNINGS LINE BY LINE
const response = await fetch(URL);      // ❗ wait for response (HTTP headers)
const data = await response.json();     // ❗ wait for body data (actual content)


// Bonus: Arrow + Async
const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
    } catch (err) {
        console.error(err);
    }
};
fetchData().then((data) => console.log(data));


// Example of using throw new Error
async function getData() {
    try {
        const res = await fetch("https://api.example.com/data");

        if (!res.ok) {
            // like 404 or 500 — not network error
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error("Caught error:", e.message);
    }
}
