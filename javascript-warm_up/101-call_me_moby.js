// Define a function named executeXTimes that executes theFunction x times
function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}
console.log(executeXTimes);

