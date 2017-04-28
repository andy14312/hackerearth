// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {
    var s = n.toString().split("");
    var c = s.length;
    var max;
    var temp;
    for(var i=0;i<c;i++) {
        // console.log(s,c);
        if(i==0) {
            s.splice(i,1);
            max = parseInt(s.join(""));
            // console.log(max);
        } else {
            s.splice(i,1);
            temp = parseInt(s.join(""));
            // console.log(temp);
            if(max <= temp)
                max = temp;
        }
        s = n.toString().split("");
        // console.log(c);
    }
    return max;
}

console.log(deleteDigit(10));