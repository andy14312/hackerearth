#include <iostream>
#include <string>
using namespace std;

int main()
{
    string input;
    cin >> input;
    int i = 0;
    int j = input.length()-1;
    string result;
    
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
    cout << result << endl;
    return 0;
}