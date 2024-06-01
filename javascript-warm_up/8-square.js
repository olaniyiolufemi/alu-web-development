// Function to print a square
function printSquare(size) {
    // Convert the size argument to an integer
    const squareSize = parseInt(size);

    // Check if the conversion was successful
    if (!isNaN(squareSize)) {
        // Check if the size is greater than 0
        if (squareSize > 0) {
            // Loop to print each row of the square
            for (let i = 0; i < squareSize; i++) {
                let row = '';
                // Loop to print each column of the square
                for (let j = 0; j < squareSize; j++) {
                    row += 'X';
                }
                // Print each row of the square
                console.log(row);
            }
        } else {
            console.log("Missing size");
        }
    } else {
        console.log("Missing size");
    }
}

// Example usage
printSquare(5); // Prints a 5x5 square of X's

