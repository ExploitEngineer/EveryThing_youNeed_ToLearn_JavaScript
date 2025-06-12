/*
INFO: JavaScript Date Object
The Date object allows you to create, manipulate, and format dates & times.
*/

// Creating a Date
let now = new Date();
console.log(now);

// Creating custom date
let birthday = new Date("2007-10-12");
let specificDate = new Date(2025, 5, 12, 10, 30); // year, monthIndex [0-11], day, hour, minute

/*
INFO: Date.now()
Returns the number of milliseconds since Jan1, 1970 (Unix Epoch)
*/
console.log(Date.now()); // e.g., 1718173455293

// INFO: Getter Methods
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// INFO: Setter Methods
let d = new Date();

d.setFullYear(2025);
d.setMonth(4); // 0-11
d.setDate(10); // 1-31
d.setHours(10);
d.setMinutes(30);

// INFO: Formatting Dates
let dt = new Date();

console.log(dt.toString()); // Full string
console.log(dt.toDateString()); // Date only
console.log(dt.toTimeString()); // Time only
console.log(dt.toISOString()); // ISO format


