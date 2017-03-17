#include <iostream>
using namespace std;

int main() {
    int length;
    cin >> length;
    int unsorted[length];
    for(int l=0;l<length;l++) {
        cin >> unsorted[l];
    }
    for(int i=0;i<length;i++) {
        for(int j=0;j<length-i;j++) {
            int temp;
            if(unsorted[j+1]<unsorted[j]) {
                temp = unsorted[j+1];
                unsorted[j+1] = unsorted[j];
                unsorted[j] = temp;
            }
        }
    }

    for(int k=0;k<length;k++) {
        cout << unsorted[k] << " ";
    }
}