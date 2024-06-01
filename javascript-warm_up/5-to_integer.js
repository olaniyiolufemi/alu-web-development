// Function to prompt the user for a value and print it as an integer if possible
function printInteger() {
    // Prompt the user for a value
    const inputValue = prompt("Enter a value:");

    // Convert the input value to an integer using parseInt
    const number = parseInt(inputValue);

    // Check if the conversion is successful and print the result accordingly
    if (!isNaN(number)) {
        console.log("My number:", number);
    } else {
        console.log("Not a number");
    }
}

// Call the function to start the process
printInteger();

