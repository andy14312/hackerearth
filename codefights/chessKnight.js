// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function chessKnight(cell) {
    var cellRow = cell.charCodeAt(0)%97+1;
    var cellCol = parseInt(cell[1]);
    var ways = 0;
    if(cellRow-2 >= 1 && cellCol+1 <= 8)
        ways++;
    if(cellRow-1 >= 1 && cellCol+2 <= 8)
        ways++;
    if(cellRow+2 <= 8 && cellCol+1 <= 8)
        ways++;
    if(cellRow+1 <= 8 && cellCol+2 <= 8)
        ways++;
    if(cellRow-2 >= 1 && cellCol-1 >= 1)
        ways++;
    if(cellRow-1 >= 1 && cellCol-2 >= 1)
        ways++;
    if(cellRow+2 <= 8 && cellCol-1 >= 1)
        ways++;
    if(cellRow+1 <= 8 && cellCol-2 >= 1)
        ways++;
    
    return ways;
}

console.log(chessKnight("d5"));
console.log(chessKnight("h8"));