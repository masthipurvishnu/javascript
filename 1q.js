/*
1. recoman sequence (rec) - recaman.js
2. Write a common function/method to sendEmail
    1. fire & forget => no responspone 
    2. with attachment
    3. with attachment + acknowledgement
3. 


*/

// move these to proper file

for (var i = 0; i < 0; i++) {
    setTimeout(() => {
        console.log(i);
    });

    for (let i = 0; i < 0; i++) {
        setTimeout(() => {
            console.log(i);
        });

        obj1 = { a: 404 }
        obj2 = obj1
        obj1.a = 403
        console.log(obj1);
        console.log(obj2);

        x = 'aaabbcccdef'
        output = '4a2b3cdef'

        "a".repeat(10)
        'aaaaaaaaaa'
        Array(11).join('a')
        'aaaaaaaaaa'

        'abcdefghij'.charAt(1)
        'b'
        'abcdefghij'.charAt(0)
        'a'
        Array(10).fill('a').join('-')
        'a-a-a-a-a-a-a-a-a-a'

        for (var google = '1'; google.length < 1 + 100; google += '0') { }
        document.getElementById('el').innerText = google;
        <div>This is "a google":</div>
        <div id="el"></div>
        Output: This is "a google":
        10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

            .split("") // create an array from a string
            .some(function (v, i, a) { ... })
    // goes through an array until the function returns true, and ends than right away.
    // (doesn't loop through the whole array, if it finds an match earlier)
    /* Time complexity of solution: O(n) */

    // how to find repeated characters in a string in javascript
    const getRepeatedChars = (str) => {
        const chars = {};
        for (const char of str) {
            chars[char] = (chars[char] || 0) + 1;
        }
        return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
    }

    getRepeatedChars("aabbkdndiccoekdczufnrz"); // ["a", "b", "c", "d", "k", "n", "z"]

    // duplicate characters in a string javascript
    const text = 'abcda'.split('')
    text.some((v, i, a) => {
        return a.lastIndexOf(v) !== i
    }) // true


    var printTwo = function () {
        console.log(2);
        console.log(arguments);
    };
    printTwo(); // 2
    printTwo.call(); // 2
    printTwo.apply(); // 2
    printTwo.apply('a'); // 2

    // remove DUPLICATE dublicate elements from an array
    let nums = [1, 2, 3, 3]
    console.log(...new Set(nums))
    new Set(nums)
    console.log(new Set(nums)) // this gives Object
    // Set(3) { 1, 2, 3 }
    //     [[Entries]]
    //     0: 1
    //     1: 2
    //     2: 3
    //     size: 3
    nums = [1, 2, 3, 3] // // 1 2 3
    console.log(...new Set(nums))  // this gives an Array
    // (3)[1, 2, 3]
    //     0: 1
    //     1: 2
    //     2: 3
    //     length: 3

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
    function recaman(n) {
        // declare an array with of size n
        let arr = new Array(n);
        // First term of the sequence is always 0
        arr[0] = 0;
        document.write(arr[0] + " ,");
        // Fill remaining terms using recursive
        // formula.
        for (let i = 1; i < n; i++) {
            let curr = arr[i - 1] - i;
            let j;
            for (j = 0; j < i; j++) {
                // If arr[i-1] - i is negative or
                // already exists.
                if ((arr[j] == curr) || curr < 0) {
                    curr = arr[i - 1] + i;
                    break;
                }
            }

            arr[i] = curr;
            document.write(arr[i] + ", ");

        }
    }

    let n = 17;
    recaman(n);

    // pennymac - nodeJS position
    // Jeremy & bobby
    1. Patterns and principles
    SOLID ?
        S ? single responsible pri ?
            how do you make it a single responsible ?
                1. js.prototype -> implementations with SRP principles
    2.

