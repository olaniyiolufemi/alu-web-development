// Function to determine the number of arguments
function checkArguments() {
    const args = Array.from(arguments);
    if (args.length === 0) {
        console.log("No argument");
    } else if (args.length === 1) {
        console.log("Argument found");
    } else {
        console.log("Arguments found");
    }
}

// Example usage
checkArguments(); // No argument
checkArguments("test"); // Argument found
checkArguments("test", "test2"); // Arguments found
