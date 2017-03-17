function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(item=>item===elemToReplace?substitutionElem:item);
}

console.log(arrayReplace([1, 2, 1],1,3));