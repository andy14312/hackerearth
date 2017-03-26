// // Given a string, return its encoding defined as follows:

// // First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// // for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// // Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// // for example, substring "bbb" is replaced by "3b"
// // Finally, all the new strings are concatenated together in the same order and a new string is returned.

// Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

function lineEncoding(s) {
    // var prev = s[0];
    // var result = "";
    // var count = 1;
    // for(var i=1;i<s.length;i++) {
    //     if(s[i] === prev) {
    //         count++;
    //     } else {
    //         result += (count===1?"":count)+prev;
    //         count = 1;
    //     }
    //     if(i === s.length-1) {
    //         result += (count===1?"":count)+s[i];
    //     }
    //     prev = s[i];
    // }
    // return result;

    return  s.replace(
        /(a)\1*/g, 
        (e,i) => {
            console.log(e,i);
            return i==e ? i : e.length+i}
    )
}

console.log(lineEncoding("aabbbaccccc"));