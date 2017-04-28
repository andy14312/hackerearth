// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Example

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

// You can only carry the first item.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

// You're strong enough to take both of the items with you.

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    var totalValue;
    if(weight1+weight2 <= maxW) {
        totalValue = value1+value2;
    } else if(weight1 <= maxW && weight2 <= maxW) {
        if(value1 >= value2) {
            totalValue = value1;
        } else {
            totalValue = value2;
        }
    } else if(weight1 <= maxW){
        totalValue = value1;
    } else if(weight2 <= maxW){
        totalValue = value2;
    } else {
        totalValue = 0;
    }
    return totalValue;
}

console.log(knapsackLight(3,5,3,8,10));