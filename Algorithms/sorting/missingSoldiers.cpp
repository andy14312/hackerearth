#include <iostream>
using namespace std;
void merge(int [],int,int,int);
void mergesort(int [],int,int);
int sumOfDiff(int [],int);

int main() {
    int barriers,x,y,d,antsBlocked=0;
    cin >> barriers;
    int xstart[barriers];
    int xend[barriers];
    int i=0;
    int counter = barriers;
    while(counter--) {
        cin >> x;
        cin >> y;
        cin >> d;
        xstart[i] = x;
        xend[i] = x+d;
        i++;
    }
    
    mergesort(xstart,0,barriers-1);
    mergesort(xend,0,barriers-1);
    antsBlocked += xend[0]-xstart[0]+1;
    for(int i=1;i<barriers;i++) {
        if(xstart[i]<=xend[i-1]) {
            antsBlocked += xend[i]-xend[i-1];
        } else {
            antsBlocked += (xend[i]-xstart[i])+1;
        }
    }
    cout << antsBlocked << endl;
    // for(int i=0;i<barriers;i++) {
    //     cout << xend[i] << " ";
    // }

    //cout << sumOfDiff(coords,barriers*2)+1 << endl;
    // cout << findHighest(xend,barriers)-findLowest(xstart,barriers)+1 << endl;
    return 0;
}

void mergesort(int coords[],int start,int end) {
    if(start<end) {
        int mid = (start+end)/2;
        mergesort(coords,start,mid);
        mergesort(coords,mid+1,end);
        merge(coords,start,mid,end);
    }
}

void merge(int coords[],int start,int mid,int end) {
    int p = start;
    int q = mid+1;
    int sorted[end-start+1];
    int k = 0;
    for(int i=start;i<=end;i++) {
        if(p>mid) {
            sorted[k++] = coords[q++];
        } else if (q>end) {
            sorted[k++] = coords[p++];
        } else if (coords[p] <= coords[q]) {
            sorted[k++] = coords[p++];
        } else {
            sorted[k++] = coords[q++];
        }
    }
    for(int j=0;j<k;j++) {
        coords[start++] = sorted[j];
    }
}

int sumOfDiff(int coords[],int length) {
    int result = 0;
    for(int i=0;i<length-1;i++) {
        result += coords[i+1]-coords[i];
    }
    return result;
}