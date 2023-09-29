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
  let arr = new Array(n);
  arr[0] = 0;
  console.log(arr[0] + ", ");

  for (i = 1; i < n; i++) {
    let newValue = arr[i - 1] - 1;
    // if already exist or new value is < 0
    for (j = 0; j < i; j++) {
      if (arr[j] == newValue || newValue < 0) {
        newValue = arr[i - 1] + i;
        break;
      }
    }
    arr[i] = newValue;
    console.log(arr[i] + ", ");
  }
};

recaman(17);

/*
This is a demo task.
Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest 
positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2023 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure p
*/

function solution(A) {
  // Implement your solution here
  const r = A.sort();
  let maxN = r[r.length - 1];
  maxN = maxN <= 0 ? 1 : maxN;
  console.log(r);
  let resultValue = 0;

  r.forEach((x) => {
    for (let i = 1; i <= maxN + 1; i++) {
      if (x < 0) {
        resultValue = 1;
      } else if (!r.includes(i)) {
        resultValue = i;
        // console.log(resultValue)
        return;
      }
    }
  });

  console.log(resultValue);
}

// JPM
const myObj = {
  city: "plano",
  getCity() {
    return this.city;
  },
};
myObj.getCity(); //"plano"
