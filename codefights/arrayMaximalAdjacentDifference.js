// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    var maximal = Math.abs(inputArray[1]-inputArray[0]),
        diff;
    for(var i=1;i<inputArray.length-1;i++) {
        diff = Math.abs(inputArray[i+1]-inputArray[i]);
        if(maximal < diff) {
            maximal = diff;
        }
    }
    return maximal;
}

console.log(arrayMaximalAdjacentDifference([2,4,1,0]));