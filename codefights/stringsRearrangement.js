// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;
// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

function stringsRearrangement(inputArray) {
    var permArr = [],
    usedChars = [];
    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
            permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    };
    function satisfied(combo) {
        var diff = 0;
        for(var i=0;i<combo.length-1;i++) {
            for(var j=0;j<combo[i].length;j++) {
                if(combo[i][j] !== combo[i+1][j])
                    diff++;
            }
            if(diff !== 1) {
                return false;
            }
            diff = 0;
        }
        return true;
    }
    var combos = permute(inputArray);
    return combos.some((combo) => {
        return satisfied(combo);
    });
}

console.log(stringsRearrangement(["ab", 
 "ad", 
 "ef", 
 "eg"]));