#include <iostream>
#include <string>
using namespace std;

int main()
{
    int tests;
    string input;
    cin >> tests;
    for(int i=0;i<tests;i++) {
        int suvo = 0;
    int suvojit = 0;
        cin >> input;
        for(unsigned int j=0;j<input.length();j++) {
            if(input[j] == 'S' && input[j+1] == 'U' && input[j+2] == 'V' && input[j+3] == 'O' && input[j+4] == 'J' && input[j+5] == 'I' && input[j+6] == 'T') {
             suvojit++;
             j=j+6;
             continue;
            }
            if(input[j] == 'S' && input[j+1] == 'U' && input[j+2] == 'V' && input[j+3] == 'O') {
                suvo++;
                j=j+3;
                continue;
            }
        }
        cout << "SUVO = "<<suvo<<", " <<"SUVOJIT = "<<suvojit<<endl;
    }
    return 0;
}
