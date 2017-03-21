// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

function bishopAndPawn(bishop, pawn) {
    var bishopRow = bishop.charCodeAt(0)%97,
        bishopCol = parseInt(bishop[1]),
        pawnRow = pawn.charCodeAt(0)%97,
        pawnCol = parseInt(pawn[1]);
    if(Math.abs(bishopRow-pawnRow) === Math.abs(bishopCol-pawnCol)) {
        return true;
    } else {
        return false;
    }
}

console.log(bishopAndPawn("g1","f3"));