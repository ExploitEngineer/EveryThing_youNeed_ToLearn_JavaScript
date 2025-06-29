// NOTE: An aysnc function is a special type of function that always returns a Promise. It allows to write asynchronous code in a cleaner, more readable way using await intead of .then() chains

async function makeRequest() {
  console.log("helo");
  throw new Error("error in program");
}
makeRequest();

async function newRequest() {
  const url = "https://dummyjson.com/products";
  const responsePromise = fetch(url);
  responsePromise.then((res) => {
    res.json().then((d) => {
      console.log(d);
    });
  });
}
newRequest();

async function request() {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url); // await returns the response of the fetched url means the result
  const data = await response.json();
  console.log(data);
}
request();

// Best way to handle api using async function
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://fakestoreapi.com/products");

// THis one is also the best way to use async & await
async function getProducts() {
  try {
    const url = "https://dummyjson.com/products";
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}
getProducts();

async function getCarts() {
  try {
    const url = "https://dummyjson.com/carts";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http error! Statu: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error Feching carts", error.message);
  }
}
getCarts();

// NOTE: Async await Quizes

// INFO: First quiz
async function test() {
  return "Hello";
}
console.log(test()); // Answer : Promise { <fulfilled>: "Hello" }

// INFO: Second Quiz
async function fetchData() {
  console.log("start");
  let promise = new Promise((resolve) =>
    setTimeout(() => resolve("Data loaded"), 2000),
  );
  console.log("waiting....");
  let data = await promise;
  console.log(data);
}

fetchData();
console.log("End"); // Answer :  start   waiting...   End    Data loaded
