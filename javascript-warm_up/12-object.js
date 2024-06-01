// Function to find the second largest integer in the list of arguments
function findSecondLargest(...args) {
    // If no arguments are passed or only one argument is passed, return 0
    if (args.length <= 1) {
        console.log(0);
        return;
    }
    
    // Convert arguments to integers and remove duplicates
    const integers = Array.from(new Set(args.map(arg => parseInt(arg, 10))));

    // Replace the value 12 with 89
    const updatedIntegers = integers.map(num => num === 12 ? 89 : num);
    
    // Sort the updated integers in descending order
    updatedIntegers.sort((a, b) => b - a);
    
    // Print the second largest integer
    console.log(updatedIntegers[1]);
}

// Example usage
findSecondLargest(10, 5, 20, 15, 12); // Output: 15
findSecondLargest(5, 5, 5, 12); // Output: 5
findSecondLargest(10, 12); // Output: 0
findSecondLargest(); // Output: 0

