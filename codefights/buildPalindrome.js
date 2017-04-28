// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

function buildPalindrome(s) {

    // var copy = st;
    // var backup = copy;
    // st = st.split("");
    // var extra = [];
    // var i =0;
    // while(1){
    //     extra.push(st.shift());
    //     copy += extra.reverse().join("");
    //     //console.log(copy);
    //     if(check(copy))
    //         return copy;
    //     //console.log(backup);
    //     copy = backup;
    //     // i++;
    // }
    // function check(palin) {
    //     if(palin === palin.split("").reverse().join(""))
    //         return true;
    //     return false;
    // }

    r = s.split``.reverse().join``;
    for(i=s.length; i--;) {
        if(s.slice(-i) == r.slice(0,i))
            break;
    }
    return s+r.slice(i);
}

console.log(buildPalindrome("abcdc"));