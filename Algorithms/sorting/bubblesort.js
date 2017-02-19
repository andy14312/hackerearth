Array.prototype.bubbleSort = function bubbleSort() {
	let temp;
	let sorted = [];
	this.forEach(function(el,i){
		sorted[i] = el;
	});
	for(let i=0;i<sorted.length;i++) {
		for(let j=0;j<sorted.length-i-1;j++) {
			if(sorted[j] > sorted[j+1]) {
				temp = sorted[j];
				sorted[j] = sorted[j+1];
				sorted[j+1] = temp; 
			}
		}
	}
	return sorted;
}

var newarray = [7,4,5,2];
console.log(newarray.bubbleSort());
console.log(newarray);