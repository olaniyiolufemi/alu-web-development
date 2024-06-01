// Function to find the second largest integer in the list of arguments
function findSecondLargest(...args) {
    // If no arguments are passed or only one argument is passed, return 0
    if (args.length <= 1) {
        console.log(0);
        return;
    }
    
    // Convert arguments to integers and remove duplicates
    const integers = Array.from(new Set(args.map(arg => parseInt(arg, 10))));
    
    // Sort the integers in descending order
    integers.sort((a, b) => b - a);
    
    // Print the second largest integer
    console.log(integers[1]);
}

// Example usage
findSecondLargest(10, 5, 20, 15); // Output: 15
findSecondLargest(5, 5, 5); // Output: 5
findSecondLargest(10); // Output: 0
findSecondLargest(); // Output: 0

