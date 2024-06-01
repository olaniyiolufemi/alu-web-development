// Define a function named incr that increments an integer value
function incr(num) {
    return num + 1;
}

// Define a function named incrementAndCall that increments a number and calls theFunction
function incrementAndCall(number, theFunction) {
    const incrementedNumber = incr(number);
    theFunction(incrementedNumber);
}

// Define a function to be called
function printNumber(num) {
    console.log("The incremented number is: " + num);
}

// Use incrementAndCall to increment a number and call printNumber
incrementAndCall(5, printNumber);

