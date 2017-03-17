function allLongestStrings(inputArray) {
    var longestLength = inputArray[0].length;
    inputArray.forEach(function(string){
        if(string.length >= longestLength) {
            longestLength = string.length;
        }
    });
    return inputArray.filter(function(string){
        return string.length === longestLength;
    });
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));