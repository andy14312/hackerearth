#include <iostream>
using namespace std;

int main()
{
    int testCases,m,max,p,l;
    cin >> testCases;
    for(int i=0;i<testCases;i++) {
        int arrLength;
        cin >> arrLength;
        int A[arrLength];
        int B[arrLength];
        int monkiness;
        for(int j=0;j<arrLength;j++)
            cin >> A[j];
        for(int k=0;k<arrLength;k++)
            cin >> B[k];
        max = 0;
        l=0;
        for(int p=0;p<arrLength;p++) {
            cout << l << p <<" "<<B[p]<<A[l]<< endl;
            while(l>=p && B[p]<A[l])
                p++;
            m = (p>=l)?p-l:0;
            max = (m>=max)?m:max;
        }
        cout << max << endl;
    }
    return 0;
}
