// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
    return inputString.match(/[0-9]*/g)[0];
}

console.log(longestDigitsPrefix("   3) always check"));