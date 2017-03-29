// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1

function differentSquares(matrix) {
    // var count = 1;
    // var squares = [];
    // var square = [];
    // var diff = {};
    // var sumOfdiff = 0;
    // for(var i=0;i<matrix.length-1;i++) {
    //     for(var j=0;j<matrix[i].length-1;j++) {
    //         square = [matrix[i][j],matrix[i][j+1],matrix[i+1][j],matrix[i+1][j+1]];
    //         squares.push(square.join(""));
    //     }
    // }
    // for(var i=0;i<squares.length;i++) {
    //     if(!diff[squares[i]]) {
    //         diff[squares[i]] = 1;
    //     }
    // }
    // for(key in diff) {
    //     sumOfdiff += diff[key];
    // }
    // return sumOfdiff;
    var a = matrix;
    var s = new Set;
    for( var i=0; i<a.length-1; i++ ) {
        for( var j=0; j<a[0].length-1; j++ ) {
            var hash = a[i][j] + 10*a[i][j+1] + 100*a[i+1][j] + 1000*a[i+1][j+1];
            console.log(hash);
            s.add( hash );
        }
    }
    
    return s.size;
}

console.log(differentSquares([[1, 2, 1],
                              [2, 2, 2],
                              [2, 2, 2],
                              [1, 2, 3],
                              [2, 2, 1]]));