function evenDigitsOnly(n) {
    return n.toString().split("").every(digit=>parseInt(digit)%2===0);
}

console.log(evenDigitsOnly(22486))