var merge = function merge(left,right) {
    var sorted = [];
    while(left.length >0 && right.length >0) {
        if(left[0] <= right[0])
            sorted.push(left.shift());
        else 
            sorted.push(right.shift());
    }
    while(left.length >0) {
        sorted.push(left.shift());
    }
    while(right.length>0) {
        sorted.push(right.shift());
    }
    return sorted;
}

var mergesort = function mergesort(unsorted) {
    if(unsorted.length < 2) 
        return unsorted;
    var mid = parseInt(unsorted.length/2);
    var left = unsorted.slice(0,mid);
    var right = unsorted.slice(mid,unsorted.length);
    return merge(mergesort(left),mergesort(right));
}

console.log(mergesort([5,6,7,1,2,3,9]));