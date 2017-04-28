// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

function sudoku(grid) {
    var numbers = new Set();
    for(var i=0;i<grid.length;i++) {
        for(var j=0;j<grid.length;j++) {
            numbers.add(grid[i][j]);
        }
        if(numbers.size !== 9)
            return false;
        numbers.clear();
    }
    for(var i=0;i<grid.length;i++) {
        for(var j=0;j<grid.length;j++) {
            numbers.add(grid[j][i]);
        }
        if(numbers.size !== 9) 
            return false;
        numbers.clear();
    }
    for(var i=0;i<9;i+=3) {
        for(var j=0;j<9;j+=3) {
            for(var k=j+0;k<j+3;k++) {
                for(var l=i+0;l<i+3;l++) {
                    numbers.add(grid[k][l]);
                }
            }
            if(numbers.size !== 9)
                return false;
            numbers.clear();
        }
    }
    return true;
}

console.log(sudoku([[1,3,4,2,5,6,9,8,7], 
 [4,6,8,5,7,9,3,2,1], 
 [7,9,2,8,1,3,6,5,4], 
 [9,2,3,1,4,5,8,7,6], 
 [3,5,7,4,6,8,2,1,9], 
 [6,8,1,7,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,5,6,3,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]));