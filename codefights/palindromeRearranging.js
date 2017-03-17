function palindromeRearranging(inputString) {
    var map={},oddCount=evenCount=0;
    for(var i=0;i<inputString.length;i++) {
        if(map[inputString[i]])
            map[inputString[i]]++;
        else 
            map[inputString[i]] = 1;
    }
    for(char in map) {
        if(map[char] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    if(oddCount>1) {
        return false;
    } else {
        return true;
    }
}

console.log(palindromeRearranging("abbcabb"));