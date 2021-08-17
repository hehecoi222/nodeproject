// Data Type in JS 

// JavaScript is weakly typed 

// Number (float), String, Boolean, Date, Function, Array and Object

// Special types: NaN, null, undefined

// Check the type of JS: 2 ways 

// typeof operator: Return a string of the data type 
// instanceof operator: Return a boolean of if a value matches the data type 

let x = true
console.log(typeof(x))

// Type can change 
x = 1 + ' hello'
console.log(typeof(x))

// Demo:

console.log("--DEMO--")

const people = ["This","Kind","Tell"];
const one = 1;
const str = "Hello World";
const b = true;
const person ={
    firstName: "This",
    lastName:"Kind"
};

function sayHello(person){
    console.log("Hello "+person.firstName);
};

console.log(typeof(people));
console.log(typeof(one));
console.log(typeof(str));
console.log(typeof(b));
console.log(typeof(person));
console.log(typeof(sayHello));

console.log("--instanceof DEMO--");

console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);