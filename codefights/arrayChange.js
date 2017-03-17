function arrayChange(inputArray) {
    var count = 0;
    console.log(inputArray);
    for(var i=0;i<inputArray.length-1;i++) {
        if(inputArray[i] >= inputArray[i+1]) {
            count += (inputArray[i]+1)-(inputArray[i+1]);
            inputArray[i+1] = inputArray[i]+1;
            console.log(inputArray);
        }
    }
    return count;
}

console.log(arrayChange([7,4,4,10,16,13,17,22,18,18]));
// console.log(arrayChange([-1000,0,-2,0]));
// console.log(arrayChange([-1000,0,-2,0]));
// console.log(arrayChange([2,1,10,1]));
// console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));

