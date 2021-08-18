// Array is list, or collections fo values
// Can contain different values of different data types

// Each value has an index: a unique numerical value represents the value in the array

// Length: check its length with arrayName.length

// 2 ways to create array:
let arr1 = ["A", true, 2];       //Adding data during creation
let arr2 = Array(5);   // 5 is the length of array (optional)

arr1[2] = 5;  // Refer to array index, adding value after creation
arr2[1] = 2;

console.log(arr1.length);
console.log(arr2);

// Populating array:
// Add data during array creation: in 1 statement
// After creation of array: require assigning the value to the index
// Index already having value will be overwritten
// M: Keep track of array length

// Length: sum of spaces that have been allocated for values in array
// Index: Numerates values or spaces in array, starting at 0 to array.length - 1
// Length always > Index (since index start from 0)