// Define a word as a sequence of consecutive letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
    var reg = new RegExp(/[\w]+/g);
    var matched = text.match(reg);
    var max = matched[0].length;
    var index = 0;
    for(var i = 1; i < matched.length; i++) {
        if(max <= matched[i].length) {
            max = matched[i].length;
            index = i;
        }
    }
    return matched[index];
}

console.log(longestWord("Ready, steady, go!"));