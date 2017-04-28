function differentRightmostBit(n, m) {
  return Math.pow(2,(n^m).toString(2).split("").reverse().join("").indexOf(1)) ;
  //or
//   return (n^m) & -(n^m);
}


console.log(differentRightmostBit(11,13));