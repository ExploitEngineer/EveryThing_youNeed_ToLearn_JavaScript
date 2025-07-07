/*
INFO: What is JSON ?
JSON stands for JavaScript Object Notation.
It's a lightweight data format used to store and exchange data, expecially between a client & a server.
Although it originates from JavaScript, JSON is language-independent and is supported across all major programming languages.
*/

/*
INFO: Use Cases of JSON
1. Sending and receving data from APIS
2. Storing data in localStorage or sessionStorage
3. Configuration files (e.g., package.json)
4. Server communication via fetch or AJAX
*/

// INFO: Common JSON Methods

/*
INFO: JSON.stringify()
Converts a javascript object to a json string. 
*/
const user = {
  name: "Rafay",
  age: 25,
  isAdmin: false,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

/*
INFO: JSON.parse()
Converts a JSON string into a javascript object.
*/
const jsonStr = '{"name": "Rafay", "age": 25}';
const parsed = json.parse(jsonStr);
console.log(parsed.name);
