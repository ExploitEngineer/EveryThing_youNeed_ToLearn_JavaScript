// What is try & catch ?
// The try & catch blocks lets you run code that might throw an error, and then handle that error in a clean way.

// Basic Syntax
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}

// Exmaples
try {
  let user = JSON.parse('{name: "John"}'); // invalid json
  console.log(user.name);
} catch (error) {
  console.log("Error caught!");
  console.log(err.message);
}

try {
  let num = 10;
  let result = num.toUpperCase(); // error
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("This always runs!");
}

try {
  console.log(a);
} catch (err) {
  console.log(err);
}

console.log("Hello WOrld");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return console.log(res.json());
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function makeAsyncRequest() {
  try {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
makeAsyncRequest();
