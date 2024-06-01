// Function to print the first argument or "No argument"
function printFirstArgument(args) {
    if (args.length > 0) {
        console.log(args[0]);
    } else {
        console.log("No argument");
    }
}

// Prompt user for input
const userInput = prompt("Enter an argument:");

// Convert user input to an array
const argumentsArray = userInput ? userInput.trim().split(/\s+/) : [];

// Call the function with the input array
printFirstArgument(argumentsArray);
