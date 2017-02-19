#include <iostream>
using namespace std;

int main() {
    int soldiers;
    int soldierPowers[10000];
    int rounds;
    int bishuPower;
    int soldiersKilled;
    int totalPower;

    cin >> soldiers;
    for(int i=0;i<soldiers;i++) 
        cin >> soldierPowers[i];
    cin >> rounds;

    while(rounds--) {
        cin >> bishuPower;
        soldiersKilled = 0;
        totalPower = 0;
        for(int j=0;j<soldiers;j++) {
            if(bishuPower >= soldierPowers[j]) {
                soldiersKilled++;
                totalPower += soldierPowers[j];
            }
        }
        cout << soldiersKilled << " " << totalPower << endl;
    }
    return 0;
}