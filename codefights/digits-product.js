// Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.

function digitsProduct(product) {
    if (product === 0) return 10;
    else if (product === 1) return 1;

    var list = [];
    for (var d = 9; d > 1; d--) {
        while (product % d === 0) {
            product /= d;
            list.push(d);
        }
    }
    // console.log(list);
    if (product !== 1) {
        return -1;
    } else {
        list = list.reverse();
        var str = list.join('');
        // console.log(str);
        return parseInt(str);
    }
}