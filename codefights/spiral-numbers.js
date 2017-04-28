// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]

function spiralNumbers(n) {
    var matrix = [];
    for(var i=0;i<n;i++) {
        var row = [];
        for(var j=0;j<n;j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    var numbers = [];
    for(var i=1;i<=n*n;i++) {
        numbers[i-1] = i;
    }
    var i,k=0,l=0,m=n,c=n;
    while(k<m && l<c) {
        for(i=l;i<c;++i) {
            matrix[k][i] = numbers.shift();
        }
        k++;
        for(i=k;i<m;++i) {
            matrix[i][c-1] = numbers.shift();
        }
        c--;
        if(k<m) {
            for(i=c-1;i>=l;--i) {
                matrix[m-1][i] = numbers.shift();
            }
            m--;
        }
        
        if(l<c) {
            for(i=m-1;i>=k;--i) {
                matrix[i][l] = numbers.shift();
            }
            l++;
        }
    }
    return matrix;
}

console.log(spiralNumbers(4));