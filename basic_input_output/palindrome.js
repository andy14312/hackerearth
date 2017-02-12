var input = process.argv[2],
	result = "";
var i = 0,j=input.length-1;

while(i <= j) {
	if(input[i] == input[j])
		result = "YES";
	else {
		result = "NO";
		break;
	}
	i++;
	j--;
}

console.log(result);