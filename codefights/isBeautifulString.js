// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.

function isBeautifulString(inputString) {
    // var reg,letterOccurences=[],lettersCount=[];
    // // console.log(inputString.match(reg));
    // for(var i = 97;i<=97+25;i++) {
    //     reg = new RegExp('('+String.fromCharCode(i)+')','g');
    //     letterOccurences = inputString.match(reg) || [];
    //     lettersCount.push(letterOccurences.length);
    // }
    
    // for(var j=1;j<lettersCount.length;j++) {
    //     if(lettersCount[j] > lettersCount[j-1])
    //         return false;
    // }
    // return true;
    var letterCounts = {},alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<inputString.length;i++) {
        letterCounts[inputString[i]] = (letterCounts[inputString[i]]||0)+1;
    }
    for(var j=1;j<alphabet.length;j++) {
        if(letterCounts[alphabet[j]] > letterCounts[alphabet[j-1]])
            return false;
    }
    return true;
}

console.log(isBeautifulString("bbc"));