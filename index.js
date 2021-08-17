// Dates
// Time is a construct: an Object

// One central object - Date: contain both date and time, and stored as number of milliseconds

// Create a date object:

// Get right now 
let now = new Date();
console.log(now);

// Set a specific date and time:
// Note that month start counting from 0, 1, 2, 3,..., 11

const randomDate = new Date(2021, 3, 14, 8, 4, 2);  // Year, Month, Date, Hour (24-hour clock), Minute, Second, ms
console.log(randomDate);

// If hour, minute and second not specified, it'll be set to midnight 

const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);

// Some methods to use with Date() Object

now.setFullYear(2020);
now.setMonth(3);  //Start counting from 0
now.setDate(24);

now.setHours(7);  //Offset UTC time
now.setMinutes(24);

console.log(now);

// Getting value 
console.log(now.getMonth());   // Get month
console.log(now.getDay());  // Get Day in a week (Sunday = 0)
console.log(now.getTime());  // miliseconds since 1/1/1970