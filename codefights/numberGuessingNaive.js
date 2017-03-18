// You are playing a number guessing game with your friend. Your friend thought of some integer x from 1 to n. In order to guess the number, you can ask two types of questions:

// "is x smaller or equal to a?" for some integer a;
// "is x greater or equal to a?" for some integer a.
// If the answer to your question is "yes", you should pay your friend $2, otherwise you should pay him $1.

// How much will you have to pay to your friend, assuming that you apply the strategy that minimizes the amount of money you have to pay in order to guess the number in the worst case scenario?

// Example

// For n = 3, the output should be
// numberGuessingNaive(n) = 3.

function numberGuessingNaive(n) {
    var guess = n;
    var l = 0,r=n-1;
    var mid;
    var payment = 0;
    var dummy = [];
    for(var i=0;i<n;i++) {
        dummy[i] = i+1;
    }
    //console.log(dummy);
    while(l<=r) {
        mid = Math.floor((r+l)/2);
        // console.log(mid);
        if(guess >= dummy[mid]) {
            payment += 2;
            l = mid+1;
        } else if(guess <= dummy[mid]){
            if(guess !== dummy[mid]) {
                payment += 1;
            }
            r = mid-1;
        } 
        //onsole.log('jjjj');
    }
    return payment;
}

console.log(numberGuessingNaive(3));