// Boolean with if statement

// Comparing in JavaScript
// <, <= : for less than or equal or closer to the start of the alphabets
// >, >= : for greater than or equal or further from the start of the alphabets
// == : check for equality regardless of data type (JS automatically converts the type)
// === : check for equal values and types (!BEST PRACTICE)

// != : check for non-equality regardless of data type
// !== : check for non-equality on values and types (!BEST PRACTICE)

// If statement

if (true === false) {
    // True side
    console.log('OK!');
} else if (true === '2') {
    console.log('Not OK!');
} else {
    console.log("Unknown");
};

// Alternative for writing if statements

// Terse: no need { } if using single line
if (9 === 9) console.log("9 = 9");
else if (9 === 8) console.log("9 = 8");
else console.log("Unknown");

// Ternary (intstant): for quick check

const message = (300 === 200) ? "OK" : "Not OK";             // If true, message = "OK"; else message = "Not OK"
console.log(message)