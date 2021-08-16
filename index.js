// Template Literal: Syntax makes strings easier to format and read

// require backtick ` ` character to start with
// Using placeholder ${} for variables or expressions
// Respect line breaks (Don't need \n character) 

let str1 = "JavaScript";
let str2 = "fun";
let str3 = "\u4e16\u754c";

console.log(`I'm writing codee in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}`);
console.log(`Another way to test if Hello, ${str3}! works on there`);

// You can also put expression inside this ${...} , Eg:

console.log(`1 + 1 is ${1+1}`);

let bool1 = true;
console.log(`The opposite of bool1 which is "true" is ${!bool1}`);