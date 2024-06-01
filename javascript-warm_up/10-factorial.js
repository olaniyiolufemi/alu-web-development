// Function to compute factorial recursively
const computeFactorial = (n) => {
    // Check if n is NaN or less than 0 (considering negative numbers as NaN)
    if (isNaN(n) || n < 0) {
        return 1; // Factorial of NaN or negative numbers is 1
    }
    
    // Base case: Factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: Compute factorial using recursion
        return n * computeFactorial(n - 1);
    }
}

// Retrieve the command-line argument (not applicable in a browser environment)
// For demonstration purposes, we'll manually set the argument
const argument = 5; // Change this value to test different arguments

// Compute and print the factorial of the argument
console.log("Factorial of", argument, "is", computeFactorial(argument));

