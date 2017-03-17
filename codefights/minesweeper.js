function minesweeper(matrix) {
    var convertedMatrix = matrix;//.map(row => row.map(item => item === true?1:0));
    var resultMatrix = [];
    var inner = [];
    var count = 0;
    for(var m=0;m<matrix.length;m++) {
        for(var n=0;n<matrix[m].length;n++) {
            inner.push(0);
        }
        resultMatrix.push(inner);
        inner = [];
    }
    for(var i=0;i<convertedMatrix.length;i++) {
        for(var j=0;j<convertedMatrix[i].length;j++) {
                if(convertedMatrix[i-1] && convertedMatrix[i-1][j-1]!==undefined && convertedMatrix[i-1][j-1]===true)
                    count++; 
                if(convertedMatrix[i-1] && convertedMatrix[i-1][j]!==undefined && convertedMatrix[i-1][j]===true)
                    count++; 
                if(convertedMatrix[i-1] && convertedMatrix[i-1][j+1]!==undefined && convertedMatrix[i-1][j+1]===true)
                    count++; 
                if(convertedMatrix[i] && convertedMatrix[i][j-1]!==undefined && convertedMatrix[i][j-1]===true)
                    count++; 
                if(convertedMatrix[i] && convertedMatrix[i][j+1]!==undefined && convertedMatrix[i][j+1]===true)
                    count++; 
                if(convertedMatrix[i+1] && convertedMatrix[i+1][j-1]!==undefined && convertedMatrix[i+1][j-1]===true)
                    count++; 
                if(convertedMatrix[i+1] && convertedMatrix[i+1][j]!==undefined && convertedMatrix[i+1][j]===true)
                    count++; 
                if(convertedMatrix[i+1] && convertedMatrix[i+1][j+1]!==undefined && convertedMatrix[i+1][j+1]===true)
                    count++; 
                resultMatrix[i][j] = count;
                count=0;
        }
    }
    return resultMatrix;
}

console.log(minesweeper([[true,false,false,true], 
                         [false,false,true,false], 
                         [true,true,false,true]]))