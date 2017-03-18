function depositProfit(deposit, rate, threshold) {
    var years = 0;
    do {
        deposit = deposit + ((deposit*rate)/100);
        years++;
    } while (deposit < threshold);
    return years;
}

console.log(depositProfit(100,1,101));