// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

function digitDegree(n,count) {
    count = count || 0;
    if(Math.floor(n/10)===0)
        return count;
    var sum = n.toString().split("").reduce((sum,digit)=>{
        return sum+Number(digit);
    },0);
    return digitDegree(sum,++count);
}

console.log(digitDegree(91));

