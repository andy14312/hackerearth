function alphabeticShift(inputString) {
    return inputString.split("").map(char=>String.fromCharCode((char.charCodeAt(0)+1)%123||97)).join("");
}

console.log(alphabeticShift("abcdefghza"));