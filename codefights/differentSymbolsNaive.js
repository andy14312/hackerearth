
// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

function differentSymbolsNaive(s) {
    var dictionary = {};
    Array.from(s).forEach((char) => {
        if(dictionary[char]) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    });
    return Object.keys(dictionary).length;
}

console.log(differentSymbolsNaive("cabca"));
