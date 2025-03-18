// INFO: Making a Basic Request
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res.data))
    .catch(error => console.error('Error:', error));

/*
1). Axios automatically parses json responses
2). It handles errors better by rejecting the Promise for non-2xx status codes.
*/


// INFO: USing async await wth axios
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
