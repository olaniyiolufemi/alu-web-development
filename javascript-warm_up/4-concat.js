// Function to prompt the user for two values and print them
function printArguments() {
    // Prompt the user for the first argument
    const firstArgument = prompt("Enter the first argument:");
    
    // Prompt the user for the second argument
    const secondArgument = prompt("Enter the second argument:");
    
    // Print the arguments in the specified format
    console.log(firstArgument + " is " + secondArgument);
}

// Call the function to start the process
printArguments();
