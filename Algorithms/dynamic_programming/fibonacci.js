let fibonacci = function fibonacci(n) {
	console.log(n);
	if(n < 2) {
		// console.log(1);
		return 1;
	}
	return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(5));