function avoidObstacles(arr) {
  for(var n=1;;n++) if(arr.every(x=>x%n!=0)) return n;
}

console.log(avoidObstacles([5,3,6,7,9]));