function sortByHeight(a) {
    var length = a.length;
    var indices = [];
    var trees = 0;
    var sorted = [];
    for(var m=0;m<length;m++) {
        if(a[m] === -1) {
            indices.push(m);
            trees++;
        }
    }
    a.sort(function(a,b){
        return a<b?-1:1;
    });
    for(var k=0;k<trees;k++) {
        sorted[indices[k]] = -1;
    }
    for(var n=0,p=0;n<length;n++) {
        if(indices.indexOf(n)===-1) {
            sorted[n] = a[p+trees];
            p++;
        }
    }
    return sorted;
}

console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]));