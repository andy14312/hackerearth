function chessBoardCellColor(cell1, cell2) {
    var chess = [];
    var inner = [];
    for(var i=0;i<8;i++) {
        for(var j=0;j<8;j++) {
            if(i%2 === 0) {
                if(j%2 === 0) {
                    inner.push(0)
                } else {
                    // chess[i][j] = 1;
                    inner.push(1)
                }
            } else {
                if(j%2 === 0) {
                    // chess[i][j] = 1;
                    inner.push(1);
                } else {
                    // chess[i][j] = 0;
                    inner.push(0);
                }
            }
        }
        chess.push(inner);
        inner = [];
    }
    var cell1Row = cell1.charCodeAt(0)%64;
    var cell1Col = parseInt(cell1[1]);
    var cell2Row = cell2.charCodeAt(0)%64;
    var cell2Col = parseInt(cell2[1]);
    return chess[cell1Row-1][8-cell1Col] === chess[cell2Row-1][8-cell2Col];
}

console.log(chessBoardCellColor("H4","A5"));