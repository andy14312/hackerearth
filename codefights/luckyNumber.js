function isLucky(n) {
    var stringed = n.toString(),
        length = stringed.length,
        mid = Math.floor(length/2),
        firstHalf=0,secondHalf=0;
    for(var i=0;i<mid;i++) {
        firstHalf += Number(stringed[i]);
    }
    for(var j=mid;j<length;j++) {
        secondHalf += Number(stringed[j]);
    }
    if(firstHalf === secondHalf) {
        return true;
    } else {
        return false;
    }
}

console.log(isLucky(239017));