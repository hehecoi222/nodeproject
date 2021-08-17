// Handling Errors

// Terminology:
// Exception: Interuption in intended execution code
// Error: Unintended interuption in executed of code, typically show up as exceptions
// Syntax errors are a type of exception that occurs when incorrect syntax is used
// Throwing an exception: Sending a message that something has gone wrong in the intended execution of code
// Can be thrown by JS or by devs (with throw keyword)

// Throwing exception

try {
    throw 'myException';
}
catch(err) {
    console.log(err);
};
// Handling Errors in JS:

// Uncaught Exceptions: Exception that have been throw when code has no guidance to handle the interuption
// Users may see unhelpful obscure messages, or none exist
// Catch these with try...catch...finally

//Try: block of code that may throw an exception
//Catch: block of code that will run if an exception is thrown
//Finally: optionally control the flow of code, even when there's not an exception thrown

// Demo:

function logError(theException) {
    console.log(theException);
};

try {
    throw "An exception";
}
catch (ex) {
    console.log("got an error");
    logError(ex)
}
finally {
    console.log("And here are the codes always running");
    console.log("Even when there's an error")
}