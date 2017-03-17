#include <iostream>
using namespace std;
void mergesort(int [],int,int,int);
void merge(int [],int,int,int,int);

int main() {
    int tests;
    cin >> tests;
    while(tests--) {
        int people,idealMatches = 0;
        cin >> people;
        int boys[people];
        int girls[people];
        for(int i=0;i<people;i++) {
            cin >> girls[i];
        }
        for(int j=0;j<people;j++) {
            cin >> boys[j];
        }
        mergesort(girls,0,people-1,0); //third param 0 for ascending, 1 for descending
        mergesort(boys,0,people-1,1);
        for(int k=0;k<people;k++) {
                if((boys[k]%girls[k] == 0) || (girls[k]%boys[k]==0)) {
                    idealMatches++;
                }
        }
        cout << idealMatches << endl;
    }
    return 0;
}

void mergesort(int people[],int start,int end,int order) {
    if(start<end) {
        int mid = (start+end)/2;
        mergesort(people,start,mid,order);
        mergesort(people,mid+1,end,order);
        merge(people,start,mid,end,order);
    }
}

void merge(int people[],int start,int mid, int end,int order) {
    int p = start;
    int q = mid+1;
    int k = 0;
    int sorted[end-start+1];
    for(int i=start;i<=end;i++) {
        if(p>mid) {
            sorted[k++] = people[q++];
        } else if(q>end) {
            sorted[k++] = people[p++];
        } else if ((order == 0 && people[p] <= people[q]) || (order == 1 && people[p] >= people[q])) {
            sorted[k++] = people[p++];
        } else {
            sorted[k++] = people[q++];
        }
    }
    for(int j=0;j<k;j++) {
        people[start++] = sorted[j];
    }
}