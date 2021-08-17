// Convert string to number 

// Use parseInt() and parseFloat() 
// Convert numerical string to numbers
// Adding non-numerical characters can have unintended results
// Float for floating point number

// Number.toString(): convert numbers to nummerical strings

const num1 = '150';

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('1+ABC')); //Special characters not numbers are ignored
console.log(parseInt('0xF'));  // Hex Number
console.log(parseInt(`${1+1}`)); //Put it in template literal

const float1 = '1.50'

console.log(parseFloat(float1));
console.log(parseInt(float1)); //Ignore the after-decimal part

// Convert numbers to string
console.log(num1.toString());
console.log(float1.toString());
console.log((100).toString());