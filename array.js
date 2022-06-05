
const getArrayValues = () => {

}
getArrayValues()
//==========ISEMPTY

const isEmpty = (items) => {
    console.log('items -', items);
    // Option 1
    // return Object.keys(items).length === 0
    // Option 2
    // for (let el in items) {
    //     if (items.hasOwnProperty(el))
    //         return false
    // }
    // return true
    //// Option 2 - item.hasOwnProperty may not work sometime, but this works
    for (let el in items) {
        if (Object.prototype.hasOwnProperty.call(items, el))
            return false
    }
    return true
    // Option 3
    // return JSON.stringify(items) === '{}'

}
const addAnElementtoArray = (items, el) => {
    items.push(el); // to add at end
    items.unshift(el)

    return items
}
export default function testFunction() {
    console.log('from test function');
    console.log(`isEmpty({}) - ${isEmpty({})}`);
    console.log(`isEmpty({a:12}) - ${isEmpty({ a: 12 })}`);
    console.log(`isEmpty('undefined') - ${isEmpty('undefined')}`);
    console.log(`isEmpty(undefined) - ${isEmpty(undefined)}`);
    console.log(`isEmpty('121212') - ${isEmpty('1212')}`);
    console.log(`isEmpty(null) - ${isEmpty(null)}`);
    console.log(`isEmpty() - ${isEmpty()}`);
    // console.log(`isEmpty() - ${isEmpty(null)}`);
};

//     items - {}
// isEmpty({}) - true
// items - { a: 12 }
// isEmpty({ a: 12 }) - false
// items - undefined
// isEmpty('undefined') - false
// items - undefined
// isEmpty(undefined) - true
// items - 1212
// isEmpty('121212') - false
// items - null
// isEmpty(null) - true
// items - undefined
// isEmpty() - true
console.log(`isEmpty() - ${isEmpty("2323")}`);
};
// ============ Empty Array concatination

console.log('test from testfunction1');
console.log([]); // [] - empty array
console.log([] + []); // empty string
console.log([] - []); // 0
console.log({} + []); // empty string
String({} + []) //    '[object Object]'
{ } +[] // 0
console.log(String([])); // empty string
console.log(String(true)); // 'true' string
console.log(String(true)); // 'false' string 
//==============================
//The Object.assign() method copies all enumerable own properties 
// from one or more source objects to a target object.It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// addAnElementtoArray=
items.push('8'); // to add at end
items.unshift('9')

items = [1, 2, 3]
el = 6
items.push(el); // [ 1, 2, 3, 6 ] - to add at end
console.log('push - ', items);
el = 7
items.unshift(el)  // [ 7, 1, 2, 3, 6 ] - added at front of the array 
console.log('unshift - ', items);
el = 8
// SHIFT
// shift() : Removes one element from starting
// Original array will have one element removed at front. 
// Returns newArray with the removed element
items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.shift() - ', items.shift()); //  1
console.log('after items.shift() - ', items); //  [ 2, 3, 4, 5 ]
items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.shift() - ', items.shift()); // 1 - does not take param
console.log('after items.shift() - ', items); // [ 2, 3, 4, 5 ]
console.log('items.shift(3) - ', items.shift(3)); // 2 - does not take param
console.log('after items.shift() - ', items); // [ 3, 4, 5 ]

//UNSHIFT
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)

items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.unshift(8) -', items.unshift(8)); //6 returns count/length
console.log('items after unshift(8) -', items); // [ 8, 1, 2, 3, 4, 5 ]

items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.unshift(8, 9) -', items.unshift(8, 9)); // 7 returns count
console.log('items after unshift(8, 9) -', items); // [8, 9, 1, 2, 3, 4, 5]

// SPLICE
// items.splice() // no changes to the original array but creates newArray with empty values
items = [1, 2, 3]
console.log('items.splice() -', items.splice());
console.log('items after splice() -', items);

//items.splice(0) // no changes to the original array but creates newArray with empty values
console.log('items.splice(0) -', items.splice(0)); // newArray will have starting from index 0 to end
console.log('items after splice(0) -', items); // original array all items were sliced

items = [1, 2, 3]
console.log('items.splice(1) -', items.splice(1)); // newArray will have starting from index 1 to end
console.log('items after splice(1) -', items); // original array will have the left over items which are index 0
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
items = [1, 2, 3, 4, 5]
console.log('items.splice(2) -', items.splice(2)); // newArray will have starting from index 2 to end
console.log('items after splice(2) -', items); // original array will have the left over items which are index 0 & 1

items = [1, 2, 3, 4, 5]
console.log('items -', items);
console.log('items.splice(2, 0, 8) -', items.splice(2, 0, 8)); // [] newArray will have starting from index 2 to end
console.log('items after splice(2, 0, 8) -', items); //[ 1, 2, 8, 3, 4, 5 ] original array will have the left over items which are index 0 & 1
//splice(2, 0, 8) this inserted 8 at index 8 on the original item
items = [1, 2, 3, 4, 5]
console.log('items -', items);
console.log('items.splice(2, 3, 8) -', items.splice(2, 3, 8)); // [ 3, 4, 5 ]newArray will have starting from index 2 to end
console.log('items after splice(2, 3, 8) -', items); // [ 1, 2, 8 ]original array will have the left over items which are index 0 & 1

// SLICE
// slice()
// slice(start)
// slice(start, end)
items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.slice() -', items.slice()); // [ 1, 2, 3, 4, 5 ]
console.log('items after slice() -', items); // [ 1, 2, 3, 4, 5 ]original array wont change
items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.slice(2) -', items.slice(2)); // [ 3, 4, 5 ]newArray will have starting from index 2 to end
console.log('items after slice(2) -', items); //[ 1, 2, 3, 4, 5 ] original array wont change
items = [1, 2, 3, 4, 5]
console.log('======== items -', items);
console.log('items.slice(2, 4) -', items.slice(2, 4)); // [ 3, 4 ] newArray will have starting from index 2 to end
console.log('items after slice(2, 4) -', items); // [ 1, 2, 3, 4, 5 ] original array wont change

//FOR FOR/IN FOR/OF
// The for and for/in looping constructs give you access to the index in the array, not the actual element
// forEach() and for/of, you get access to the array element itself

items = [1, 2, 3, 4, 5]
for (let i in items) {
    console.log(i); // indexes - 0 1 2 3 4
}
items.forEach((element, ind) => {
    console.log(element, ind); // item index - 1 0, 2 1, 3 2, 4 3, 5 4
});
for (let i of items) {
    console.log(i); // prints actual element -  1 2 3 4 5
}
console.log('======== items -', items); // [ 1, 2, 3, 4, 5 ]
//FOREACH
// does not return or we cant return anything from forEach.
// if you want you can modify the original value within the forEach
items = [1, 2, 3, 4, 5]
let newArr = items.forEach((el, ind) => {
    return items[ind] = el * 2
});
console.log('newArr -', newArr); // unefined 
console.log('items-', items);// [ 2, 4, 6, 8, 10 ]
// does not return or we cant return anything from forEach.
// if you want you can modify the original value within the forEach

//MAP
// Map caches the results
items = [1, 2, 3, 4, 5]
let newArr1 = items.map((el) => {
    return el * 3
});
console.log('newArr1 -', newArr1); //[ 3, 6, 9, 12, 15 ]
console.log('items-', items); //[ 1, 2, 3, 4, 5 ]


// Array typeof
items = [1, 2, 3, 4, 5]
console.log(typeof items);//object

items = ["1", "2", "3", "4", "5"]
console.log(typeof items);//object

items = new Array(1, 2, 3)
console.log(typeof items); //object


// HACKRRANK HackerRank

rotateArray([1, 2, 3, 4, 5], 4)
// d is number of rotations
// output: [5, 1, 2, 3, 4]
// [2, 3, 4, 5, 1] => [3, 4, 5, 1, 2]=> [4, 5, 1, 2, 3]=> [5, 1, 2, 3, 4]
const rotateArray = (items, d) => {
    console.log('==========rotateArray====');
    console.log(items, d);
    let newArray = []
    for (let i = 0; i < d; i++) {
        // let s = items.shift()
        // items.push(s)
        items.push(items.shift())
        console.log(items);
    }
}