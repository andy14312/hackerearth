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
    var count = 1;
    for(var i=0;i<matrix.length-1;i++) {
        for(var j=0;j<matrix[i].length-1;j++) {
            if(!(matrix[i][j] === matrix[i][j+1] && matrix[i+1][j] === matrix[i+1][j+1] && matrix[i][j] === matrix[i+1][j]))
                count++;
        }
    }
    return count;
}

console.log(differentSquares([[9,9,9,9,9], 
                              [9,9,9,9,9], 
                              [9,9,9,9,9], 
                              [9,9,9,9,9], 
                              [9,9,9,9,9], 
                              [9,9,9,9,9]]));