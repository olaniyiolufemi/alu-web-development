<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Addition of Two Integers</title>
</head>
<body>

<script>
// Define the add function
function add(a, b) {
    // Check if both arguments are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        // Calculate the sum and print it
        console.log("Sum:", a + b);
    } else {
        console.log("Please provide two numbers as arguments.");
    }
}

// Call the add function with two integers
add(5, 3); // Example: 5 + 3 = 8

// Call the add function with non-integer arguments
add("hello", 3); // Example: "hello" is not a number
</script>

</body>
</html>

