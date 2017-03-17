function boxBlur(image) {
    var result = [];
    var inner = [];
    var outer = [];
    for(var i=1;i<image.length-1;i++) {
        for(var j=1;j<image[i].length-1;j++) {
            console.log('hhh');
            inner.push(Math.round((image[i-1][j-1] + image[i-1][j] + image[i-1][j+1]
            + image[i][j+1] + image[i+1][j+1] + image[i+1][j] + image[i+1][j-1] +image[i][j-1] + image[i][j])/9));
        }
        console.log('gggg');
        result.push(inner);
        inner = [];
    }
    return result;
}

console.log(boxBlur([[7,4,0,1], 
                     [5,6,2,2], 
                     [6,10,7,8], 
                     [1,4,2,0]]));