#include <iostream>
using namespace std;
void merge(int [],int,int,int,int);
void mergesort(int [],int,int,int);
int main() {
    int n,k;
    cin >> n;
    cin >> k;
    int unsorted[n];

    for(int i=0;i<n;i++) {
        cin >> unsorted[i];
    }
    //cout << 5/2 << endl;
    mergesort(unsorted,0,n-1,k);

    for(int l=0;l<n;l++) {
        cout << unsorted[l] << " ";
    }
}

void mergesort(int unsorted[],int start,int end,int mod) {
    int mid;
    if(start < end) {
        mid = (start+end)/2;
        mergesort(unsorted,start,mid,mod);
        mergesort(unsorted,mid+1,end,mod);
        merge(unsorted,start,mid,end,mod);
    }
    
}

void merge(int unsorted[],int start,int mid,int end,int mod) {
    int sorted[end-start+1];
    int k = 0;
    int p = start;
    int q = mid+1;
    for(int i=start;i<=end;i++) {
        if(p>mid) {
            sorted[k++] = unsorted[q++];
        }
        else if(q>end) {
            sorted[k++] = unsorted[p++];
        }
        else if((unsorted[p]%mod) <= (unsorted[q]%mod)) {
            sorted[k++] = unsorted[p++];
        } else {
            sorted[k++] = unsorted[q++];
        }
    }
    for(int j=0;j<k;j++) {
        unsorted[start++] = sorted[j];
    }
}
