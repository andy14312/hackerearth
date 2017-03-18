// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

function arrayMaxConsecutiveSum(inputArray, k) {
    var max = -Infinity;
    // This solution exceeded the time limit of 4000ms in one of the hidden test cases :p
    // for(var i=0;i<=inputArray.length-k;i++) {
    //     var partialSum = inputArray.slice(i,i+k).reduce((sum,int)=>sum+int,0); 
    //     if(max <= partialSum) {
    //         max = partialSum;
    //     }
    // }
    var partialSum = 0;
    for(var i=0;i<=inputArray.length-k;i++) {
        for(var j=i;j<i+k;j++) {
            partialSum+=inputArray[j];
        }
        if(max <= partialSum) {
            max = partialSum;
        }
        partialSum = 0;
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2))
