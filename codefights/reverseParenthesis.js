function reverseParentheses(s) {
    console.log(s.match(/\([^(]*?\)/));
while (s != (s = s.replace(/\([^(]*?\)/, t => {
    console.log([...t]);
    return [...t].slice(1, -1).reverse().join('')
})));
    return s;
}

//reverseParentheses("vw(xa(bc)deio)pb");
//reverseParentheses("a(bc)de");
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));