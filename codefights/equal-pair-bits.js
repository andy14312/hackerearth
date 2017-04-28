function equalPairOfBits(n, m) {
  return ~(n ^= m) & -~n;
}

console.log(equalPairOfBits(895,928));