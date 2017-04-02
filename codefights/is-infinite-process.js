function isInfiniteProcess(a, b) {
    return a>b || (b-a)%2===0?false:true;
}

console.log(isInfiniteProcess(3,1));