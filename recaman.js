
// Javascript program to print
// n-th number in Recaman's sequence
/*
    a(n)= 0             //if n = 0
        = a(n - 1) - n  // if a(n-1) - n > 0 and is not already in the sequence
        = a(n-1) + n    // otherwise
    // 0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22
i/p:// 1, 2, 3, 4, 5, 6, 7,  8 ,  9, 10, 11, 12
*/
// Prints first n terms of Recaman sequence
const recaman = (n) => {
    let arr = new Array(n)
    arr[0] = 0
    console.log(arr[0] + ', ')

    for (i = 1; i < n; i++) {
        let newValue = arr[i - 1] - 1;
        // if already exist or new value is < 0
        for (j = 0; j < i; j++) {
            if (arr[j] == newValue || newValue < 0) {
                newValue = arr[i - 1] + i
                break
            }
        }
        arr[i] = newValue;
        console.log(arr[i] + ', ')
    }
}

recaman(17)