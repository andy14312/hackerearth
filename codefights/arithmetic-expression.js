// Consider an arithmetic expression of the form A#B=C. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

// Example

// For A = 2, B = 3 and C = 5, the output should be
// arithmeticExpression(A, B, C) = true.

// We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

// For A = 8, B = 2 and C = 4, the output should be
// arithmeticExpression(A, B, C) = true.

// We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

// For A = 8, B = 3 and C = 2, the output should be
// arithmeticExpression(A, B, C) = false.

// 8 + 3 = 11 ≠ 2;
// 8 - 3 = 5 ≠ 2;
// 8 * 3 = 24 ≠ 2;
// 8 / 3 = 2.(6) ≠ 2.
// So the answer is false.

function arithmeticExpression(A, B, C) {
    // var exp = A+"#"+B;
    // var signs= ["+","-","*","/"];
    // return signs.some((sign)=>{
    //     return Number(eval(exp.replace(/[#]/,sign))) === Number(C);
    // });

    //some nice ES6 below
    return [...'+-*/'].some(sign=>eval(`${A}${sign}${B}`)===C);
}

console.log(arithmeticExpression(2,3,5));