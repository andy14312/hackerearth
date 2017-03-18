/*
    Given a sorted array of integers a, find such an integer x that the value of

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.
*/

function absoluteValuesSumMinimization(a) {
    var index = a.length%2===0 ? a.length/2-1 : Math.floor(a.length/2);
    return a[index];
}


// console.log(absoluteValuesSumMinimization([-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]));
// console.log(absoluteValuesSumMinimization([0,7,9]));
console.log(absoluteValuesSumMinimization([1,1,3,4]));