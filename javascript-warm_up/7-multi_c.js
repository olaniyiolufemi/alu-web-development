// Retrieve the first argument from the query string in the URL
const urlParams = new URLSearchParams(window.location.search);
const x = parseInt(urlParams.get('x'));

// Check if x is a valid integer
if (!isNaN(x) && Number.isInteger(x)) {
    // Loop x times and print "C is fun" each time
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
} else {
    // Print an error message if x is not a valid integer
    console.log("Missing number of occurrences");
}

