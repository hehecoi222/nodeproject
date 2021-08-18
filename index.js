// Boolean with switch statement (and other Boolean syntax)

// Implicit false values
// String: empty string; Object: null; Number: 0
// Eg:

if (0) {        // Use ! to reverse the result 
    console.log("0 contain *NO* value")
};

// String are case sensitive, and to fix that, convert lower, upper 
// Or use localeCompare()

if ("Hello" === "hello") {
    console.log("Print out something");
};

// Fix #1:
if (("Hello").toLocaleLowerCase() === "hello") {
    console.log("Print out something to say " + "hello");
};


// Combinig comparisions
// &&: and; ||: or

if ((200 === 200) && (3000 === 3000)) { // And
    console.log("OK!");
};

if (400 === (400 || 500)) {   // Or
    console.log("400 or 500 error");
};

// More useful switch statement:

switch (400) {
    case 200:       // Always check equality
        console.log("OK!");
        break;      // MUST have break if not, the flow falltthrough the entire switch statement;
    case 400 || 500:    // 400 or 500
        console.log("Error");
        break;
    default:
        console.log("Unknown");
        break;
};    //Just like Golang