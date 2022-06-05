/*
// walmart 4/27/2022
// Best Quiz Maker

// Question 1 of 25
// Create a function named getLength which takes a string as an argument 
and returns the length of the string.

// For example:

// getLength('foo') should return 3
// getLength('hello') should return 5

// Answer given:

const getLength = (inputStr) => {
    const lenght = inputStr?.length;
    return length;
}

console.log(getLength('foo'));// 3
console.log(getLength('hello'));// 5

// Question 2 of 25
// Create a function named concatenate which takes two strings as 
arguments and returns a single string composed of those two strings without spaces.

// For example:

// concatenate('foo','bar') should return 'foobar'
// concatenate('hello','world') should return 'helloworld'

// Answer given:

const concatenate = (inputStr1, inputStr2) => {
    // inputStr1 + inputStr2
    return `${inputStr1}${inputStr2}`;
    // return inputStr1.concat(inputStr2)
    // return inputStr1 + inputStr2 
}
console.log(concatenate('foo', 'bar'));
console.log(concatenate('hello', 'world'));
Words: 16
Points: 0 / 1
This question requires grading.

    Question 3 of 25
Create a function named difference which takes two integers as 
arguments and returns the absolute value of the difference.

For example:
difference(1, 2) should return 1
difference(-5, 5) should return 10
 
Answer given:

const difference = (x, y) => {
    const result = x - y
    return Math.abs(result)
}

console.log(difference(1, 2));

console.log(difference(-5, 5));
Words: 20
Points: 0 / 1
This question requires grading.

    Question 4 of 25
Create a function named isOdd which accepts an integer as an 
argument and returns true if the value is odd.An odd integer 
is not wholly divisible by two.

For example:

isOdd(4) should return false
isOdd(5) should return true
 
Answer given:

const isOdd = (x) => {
    const result = x % 2 === 0 ? true : false
    return !result
}

console.log(isOdd(4));

console.log(isOdd(5));
Words: 23
Points: 0 / 1
This question requires grading.

    Question 5 of 25
Create a function named addTwo which takes an array of 
integers as an argument and returns an array where each
value has been incremented by two.

For example:

addTwo([1, 2, 3]) should return [3, 4, 5]
addTwo([0, 0]) should return [2, 2]
 
Answer given:

const addTwo = (arr1) => {
    // const result =arr1.flatMap(x => [x + 2])
    return arr1.map(x => x + 2)
}

console.log(addTwo([1, 2, 3]));
console.log(addTwo([0, 0]));
flat()
flat(depth)

The flat() method creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth.
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

flatMap() = map() + flat()

Words: 26
Points: 0 / 1
This question requires grading.

    Question 6 of 25
Create a function named convertHexadecimal which takes as an
argument a string representing a hexadecimal integer(base - 16) and 
returns a decimal integer(base - 10).

For example:

convertHexadecimal('10') should return 16
convertHexadecimal('af') should return 175

Sol: 
Convert a number to a hexadecimal string with:
hexString = yourNumber.toString(16);
And reverse the process with:
yourNumber = parseInt(hexString, 16);

const num = 12
console.log(num.toString(16))  // c
console.log(parseInt(c, 16))  //12
Answer given:

const convertHexadecimal = (inputStr) => {
    // inputStr.split("").reduce((hex,c)=>hex+=c.charCodeAt(0),"")
    hex = unescape(encodeURIComponent(inputStr))
        .split('').map(function (v) {
            return v.charCodeAt(0).toString(16)
        }).join('')
    return inputStr;
}

console.log(convertHexadecimal('10'));
console.log(convertHexadecimal('af'));

This question requires grading.

Question 7 of 25
Create a function named onlyTruthy which takes as an argument an array of values 
and returns an array consisting of only those values which are truthy(equivalent to true).

For example:

onlyTruthy([false, true, true]) should return [true, true]
onlyTruthy([0, 1, '', 'a']) should return [1, 'a']
 
Answer given:

const onlyTruthy = (arr1) => {
    return arr1.filter(x => !x === false)
}

console.log(onlyTruthy([false, true, true]));
console.log(onlyTruthy([0, 1, '', 'a']));
Words: 30
Points: 0 / 1
This question requires grading.

    Question 8 of 25
Create a function nasumed m which takes as an argument a non - empty array of integers 
and returns the sum of those integers.

For example:

sum([1, 2, 3]) should return 6
sum([0, 4, 4, 4]) should return 12
 
Answer given:

const sum = (arr1) => {
    return arr1.reduce((acc, num) => acc + num)
}

console.log(sum([1, 2, 3]));
console.log(sum([0, 4, 4, 4]));
Words: 21
Points: 0 / 1
This question requires grading.

    Question 9 of 25
Create a function named removeVowels which takes a string as an argument and returns 
that string with all vowels removed.

Vowels are considered the following characters: a, e, i, o, u, A, E, I, O, U

For example:

removeVowels('Hello World') should return 'Hll Wrld'
removeVowels('FOOBAR') should return 'FBR'
 
Answer given:
const removeVowels = (inputStr) => {
    const arry1 = inputStr.split('');
    let resultStr = '';

    arry1.map(x => {
        console.log(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(x))
        if (!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(x)) {
            resultStr += x
        }
    })


    return resultStr
}

console.log(removeVowels('Hello World'));
console.log(removeVowels('FOOBAR'))

console.log(removeVowels('Hello World'));
console.log(removeVowels('FOOBAR'))
Words: 38
Points: 0 / 1
This question requires grading.

    Question 10 of 25
Create a function removeDuplicates which takes a non - empty array as a value and 
returns an array with only one copy of any of the original array's values.

For example:

removeDuplicates([0, 0, 1, 2, 2]) should return [0, 1, 2]
removeDuplicates(['a', 'a', 'a']) should return ['a']

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);
To find the duplicate values, you need to reverse the condition:

let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});

console.log(dupChars);
Remove duplicates from an array using forEach() and include()
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);

const removeDuplicates = (arr1) => {
    const lookupObj = {}
    const resultArray = []
    arr1.map(x => {
        if (!lookupObj.hasOwnProperty(x)) {
            lookupObj[x] = true
            resultArray.push(x)
        }
    })

    return resultArray
}

console.log(removeDuplicates([0, 0, 1, 2, 2]));
console.log(removeDuplicates(['a', 'a', 'a']));

console.log(removeDuplicates("aaabbbcccddd"); //abcd
console.log(removeDuplicates("aaabbbcccddd"); //a3b3c3d3


Words: 37
Points: 0 / 1
This question requires grading.

    Question 11 of 25
Create a function named join which takes two arrays as argument and returns 
a single array consisting of all the values of those two arrays.

For example:

join([0, 1], [1, 2]) should return [0, 1, 1, 2]
join(['a', 'b'], ['c']) should return ['a', 'b', 'c']
 
Answer given:

const join = (arr1, arr2) => {
    const results = arr1.concat(arr2)
    return results
}
const join = (arr1, arr2) => {
    const results = arr1.concat(arr2)
    return results
}

Words: 14
Points: 0 / 1
This question requires grading.

    Question 12 of 25
Create a function named getLast which takes a non - empty array of unspecified 
length and returns the last element of the array.

For example:

getLast([1, 2, 3]) should return 3
getLast([9, 7, 5]) should return 5
 
Answer given:
const getLast = (arr1) => {
    const resultArr = arr1.length - 1
    return arr1[resultArr]
}

Words: 15
Points: 0 / 1
This question requires grading.

    Question 13 of 25
Create a function named reverse which takes a non - empty array as an argument and returns a reversed array without mutating the input.

For example:

reverse([1, 2, 3]) should return [3, 2, 1]
reverse([1, 0]) should return [0, 1]
 
Answer given:
const reverse = (arr1) => {
    const resultArr = []
    arr1.map(x => {
        resultArr.unshift(x)
    })
    return resultArr
}
//shift => like pop removing an items from starting
//unshift => add at starting of the arrary
//pop => removing at end of an array
//push => adding at endo of an array


Words: 18
Points: 0 / 1
This question requires grading.

    Question 14 of 25
Created a function named toArray which takes an unspecified number of arguments and returns an array with those arguments as values.

For example:

toArray(1, 2, 3) should return [1, 2, 3]
toArray('a') should return ['a']
 
Answer given:
const toArray = (...rest) => {
    return rest

}
undefined
toArray(1, 2, 3)
    (3)[1, 2, 3]
toArray('a')
['a']

...rest
// when you use ... after = (equals)
// before = it is called spread operator

 
No answer given
Points: 0 / 1
Question 15 of 25
Create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.

For example:

allGreaterThanThree(1, 3, 5) should return false
allGreaterThanThree(4, 6) should return true
 
Answer given:
const allGreaterThanThree = (...rest) => {
    return rest.every(x => x > 3)
}
undefined
allGreaterThanThree(1, 3, 5)
false
allGreaterThanThree(4, 6)
true
 
No answer given
Points: 0 / 1
Question 16 of 25
Create a function named anyGreaterThanThree which accepts an unspecified number of integer arguments and returns true if any passed argument is greater than 3.

For example:

anyGreaterThanThree(2, 3) should return false
anyGreaterThanThree(2, 3, 4) should return true
 
Answer given:
const allGreaterThanThree = (...rest) => {
    return rest.some(x => x > 3)
}
undefined
allGreaterThanThree(1, 3, 5)
true
allGreaterThanThree(1, 1, 2)
false
allGreaterThanThree(2, 3)
false
allGreaterThanThree(2, 3, 4)
true

No answer given
Points: 0 / 1
Question 17 of 25
Create a function named getValues which takes an object and returns an array of the enumerable property values of the object.

For example:

getValues({ a: 1, b: 2 }) should return [1, 2]
getValues({ c: 'foo' }) should return ['foo']
 
Answer given:
const getValues = (obj1) => {
    const arr1 = Object.values(obj1)

    return arr1
}
undefined
getValues({ a: 1, b: 2 })
    (2)[1, 2]
const getValues = (obj1) => {
    const arr1 = Object.keys(obj1)

    return arr1
}
undefined
getValues({ a: 1, b: 2 })
    (2)['a', 'b']
No answer given
Points: 0 / 1
Question 18 of 25
Create a function named arity which takes a function as an argument and returns the number of defined arguments the function accepts.  

For example:

If,

const add = (a, b) => a + b
const addOne = (a) => a + 1

Then,

    arity(add) should return 2
arity(addOne) should return 1
 
Answer given:

const arity = (x, y) => {


}
undefined
arity.length
2
const arity = (inputFn) => {
    return inputFn.length

}
undefined
const add = (a, b) => a + b
const addOne = (a) => a + 1
undefined
arity(add)
2
arity(addOne)
1

No answer given
Points: 0 / 1
Question 19 of 25
Create a function called functionalize which takes a value and returns a function, which when executed, returns that value.

For example:

functionalize('a')() should return 'a'
functionalize(false)() should return false
 
Answer given:
const functionalize = (value) => {
    const clouserFn = () => {
        return value
    }

    return clouserFn
}
undefined
functionalize('a')
    () => {
    return value
}
functionalize('a')()
'a'

// closure: fun returns another function..
parent scope variable can be accessed in the closure fun...



No answer given
Points: 0 / 1
Question 20 of 25
Create a function named compose which accepts an unspecified number of single - argument functions as arguments and returns a function which executes those functions from left to right.

For example:

If,

const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

Then,

    compose(addOne, multiplyByTwo)(3) should return 8.
 
Answer given:
const compose = (...restFn) => {
    let funRef
    [...restFn].forEach(currentFn => {
        console.log(currentFn)
        funRef = currentFn;
    })
    return funRef
}
undefined
const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

undefined
compose(addOne, multiplyByTwo)(3)
VM12368: 4(a) => a + 1
VM12368: 4(b) => b * 2
6
No answer given
Points: 0 / 1
Question 21 of 25
Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault.

For example:

setDefault(72)(true) should return true
setDefault('foobar')(false) should return 'foobar'
 
Answer given:
 
No answer given
Points: 0 / 1
Question 22 of 25
Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter.The function should return the value found after treating each string as a key traversing the object.If the path does not exist, the function should return undefined.

For example:

safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2
safelyTraverse({}, ['a', 'b']) should return undefined
 
Answer given:
 
No answer given
Points: 0 / 1
Question 23 of 25
Create a function named throwOn2 which accepts an integer as an argument and returns the integer if it is not 2.  If it is 2, the function should throw an error with message "2 is not allowed."

For example:

throwOn2(3) should return 3
throwOn2(2) should throw an error and error.message should be "2 is not allowed"
 
Answer given:
function userException1(msg) {
    this.message = msg
}
const throwOn2 = (int1) => {
    if (int1 === 2) {
        throw new userException1('2 is not allowed')
    } else {
        return int1
    }
}
undefined
try {
    throwOn2(2)
} catch (e) { console.log(e.message) }
VM16929: 3 2 is not allowed
undefined
try {
    throwOn2(2)
} catch (e) { console.log(e) }
VM16971: 3 userException1 { message: '2 is not allowed' }
undefined
try {
    throwOn2(3)
} catch (e) { console.log(e) }
3
No answer given
Points: 0 / 1
Question 24 of 25
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.

For example:

await promisify(2) should return 2
await promisify(3).then(val => val + 1) should return 4
 
Answer given:

const functionalize = (value) => {
    const clouserFn = () => {
        return value
    }

    return clouserFn
}
undefined
functionalize('a')
    () => {
    return value
}
functionalize('a')()
'a'

const promisifyValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        })
    })
}
undefined
promisifyValue(2)
Promise {
    <pending>}
        await promisifyValue(2)

        2
await promisifyValue(3).then(val => val + 1)

        3
const promisifyValue = (x) => {
  return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(x)
            })
        })
}
        undefined
        await promisifyValue(2)

        2
await promisifyValue(3).then(val => val + 1)

        4
        No answer given
        Points: 0 / 1
        Question 25 of 25
        Create a function named promisifyFunction which takes a synchronous function fn with an unspecified argument signature as an argument and returns a function with the same argument signature that returns a promise which resolves to the output of fn with passed arguments.

        For example:

        If,

const add = (a, b) => a + b
const multiplyByTwo = (c) => c * 2

        Then,

        await promisifyFunction(add)(1, 1) should return 2
await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7

        Answer given:

        No answer given
        Points: 0 / 1

    */