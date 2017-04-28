// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

// Example

// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.

function sumUpNumbers(inputString) {
    var costs = inputString.match(/[0-9]+/g);
    if(costs) {
        return costs.map(Number).reduce((sum,el)=>{
            return sum+el;
        },0);
    } 
    return 0;
}

console.log(sumUpNumbers("2 apples, 12 oranges"));