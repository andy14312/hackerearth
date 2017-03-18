function circleOfNumbers(n, firstNumber) {
    return (firstNumber+Math.floor(n/2))%n;
}

console.log(circleOfNumbers(4,1))