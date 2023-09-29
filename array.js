
const getArrayValues = () => {

}
getArrayValues()
//==========ISEMPTY
// how do  you find if an arrary is an empty or not?
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
// ===================================================================================
/*

let supers = ['Superman', 'Batman', 'Flash', 'Aquaman']

supers.length => length property is mutable
supers.length = 2;
    console.log(supers); //['Superman', 'Batman']
    supers.length = 3;
    console.log(supers); //['Superman', 'Batman', empty]

    console.log(supers.indexOf("Flash")); //2
    console.log(supers.indexOf("Green Lontern")); // -1

    console.log(supers.includes("Batman"));//true
    console.log(supers.includes("batman"));//false

Boolean(-1) => true


pop
shift
push
unshif

concat
includes => true/false
indexOf
const items = [1, 2, 3, 4, 5, 6]
console.log(items.indexOf(3)) // 2
console.log(items.indexOf(13)) // -1
console.log(!!items.indexOf(13)) // true *****
find      : returns the first item that satisfies the condition
findIndex : returns the first index that satisfies the condition
const items = [1, 2, 3, 4, 5, 6]
console.log(items.findIndex(a=>a===3)) // 2
const items = [11, 21, 31, 41, 51, 61]
console.log(items.indexOf(3)) // -1
console.log(items.find(3)) // -1
console.log(items.find(a=>a===311)) // undefined

.at
const arr = [0,11,22,33,44,55,66]
console.log(arr.at(3)) //33
console.log(arr[3]) //33
console.log(arr.at(-1)) //66
console.log(arr[-1]) //undefined
console.log(arr.at(-2)) // 55
console.log(arr[arr.length + (-2)]) //55

forEach
map
flat()
flat(depth)

The flat() method creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth.
The flat() method creates a new array with the elements of the subarrays concatenated into it.
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

flatMap() = map() + flat()
flatMap() method that maps each element in an array using a mapping function and flattens the result into a new array
The map() method creates a new array whose elements are the results of a mapping function.
The flat() method creates a new array with the elements of the subarrays concatenated into it.

some - return true on the first items which satisfies the condition
const items = [11, 21, 31, 41, 51, 61]
console.log(items.some(a=>a===31)) // true
console.log(items.some(a=>a===131)) // false
every : returns true if all the items satisfies the condition.
const hasInexpenciveITems = items.evry((item)=>item.price <1000)) 
const inputItem = "Spects"
const isNewItem = items.every((item)=>item.name !== inputItem)) 


let newSupers = supers.concat(['Wolverine', 'Cyclops', 'Professer X'])
join - array into string with all the values.
split - string into an array


    console.log(supers.join());    //Superman,Batman,Flash,Aquaman 
    console.log(supers.join(''));//SupermanBatmanFlashAquaman
    console.log(supers.join(', '));//Superman, Batman, Flash, Aquaman
    console.log(supers.join('|'));   //Superman|Batman|Flash|Aquaman

    let supers = "Superman,Batman,Flash,Aquaman";
    console.log(supers.split(",")) // ['Superman', 'Batman', 'Flash', 'Aquaman']

    
slice
It is not a distructive method, original item wont be modified.
splice 
Splice can be used for 
1. remove set of items from an array
2. inert items in an arrary
4. replace items in an arrary
3. delete an item from an array
5. And it is a distructive method. it modifies the original item

    let supers = [
      "Superman",
      "Batman",
      "Flash",
      "Aquaman",
      "Thor",
      "Spider-man",
      "Wolverine",
      "Cyclops",
      "Professor X",
    ];
    console.log(supers);
    let xmen = supers.slice(3, 5); //['Aquaman', 'Thor']

    let supers = [
      "Superman",
      "Batman",
      "Flash",
      "Aquaman",
      "Thor",
      "Spider-man",
      "Wolverine",
      "Cyclops",
      "Professor X",
    ];
    console.log(supers);
    let xmen = supers.slice(3, 5); 
    console.log(xmen);//['Aquaman', 'Thor']

      let supers = [
      "Superman",
      "Batman",
      "Flash",
      "Aquaman",
      "Thor",
      "Spider-man",
      "Wolverine",
      "Cyclops",
      "Professor X",
    ];
    console.log(supers);
    
// replace
    let xmen = supers.splice(5, 1, " Green Lontern");
    console.log(xmen); //['Spider-man']
    console.log(supers); //['Superman', 'Batman', 'Flash', 'Aquaman', 'Thor', ' Green Lontern', 'Wolverine', 'Cyclops', 'Professor X']
      // Insert
    let xmen = supers.splice(5, 0, " Green Lontern");
    console.log(xmen); //[]
    console.log(supers); //['Superman', 'Batman', 'Flash', 'Aquaman', 'Thor', ' Green Lontern', 'Spider-man', 'Wolverine', 'Cyclops', 'Professor X']
    // DELETE
    let xmen = supers.splice(3, 1);
    console.log(xmen); //['Aquaman']
    console.log(supers); //['Superman', 'Batman', 'Flash', 'Thor', 'Spider-man', 'Wolverine', 'Cyclops', 'Professor X']
// REVERSE
    console.log(supers.reverse());//['Professor X', 'Cyclops', 'Wolverine', 'Spider-man', 'Thor', 'Aquaman', 'Flash', 'Batman', 'Superman']
    
    console.log(supers.sort());//['Aquaman', 'Batman', 'Cyclops', 'Flash', 'Professor X', 'Spider-man', 'Superman', 'Thor', 'Wolverine']

*/
//==============================
//The Object.assign() method copies all enumerable own properties 
// from one or more source objects to a target object.It returns the modified target object.
// In JavaScript, all standard built-in object-copy operations 
//(spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) create shallow copies rather than deep copies.
//shallow copy: properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const originalObject = { enabled: true, darkMode: false }
const secondObject = Object.assign({}, originalObject)
originalObject.enabled = false
console.log(originalObject) //{enabled: false, darkMode: false}
console.log(secondObject) //{enabled: true, darkMode: false}
secondObject.darkMode = true
console.log(secondObject) // {enabled: true, darkMode: true}
console.log(originalObject) // {enabled: false, darkMode: false}

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source); // this just clone, original values wont change.

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

// SPLICE
// items.splice() // no changes to the original array but creates newArray with empty values
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
items = [1, 2, 3, 4, 5, 6]
console.log('items.splice() -', items.splice()); // []
console.log('items after splice() -', items); // [1, 2, 3, 4, 5, 6]

const items = [1, 2, 3, 4, 5, 6]
const x = items.splice(1) //remove items from index 1
console.log('items.splice() - removed-', x); // [2, 3, 4, 5, 6] - removed items
console.log('items after splice() original-', items); // [1] - left over in original array

items = [1, 2, 3, 4, 5, 6]
x = items.splice(2, 3) //remove 3 items from index 2
console.log('items.splice() - removed-', x); //  [3, 4, 5]
console.log('items after splice() original-', items); //[1, 2, 6] (original array)

items = [1, 2, 3, 4, 5, 6]
x = items.splice(2, 3, 9, 8) //remove 3 items from index 2
console.log('items.splice() - removed-', x); //  [3, 4, 5]
console.log('items after splice() original-', items); //[1, 2, 9, 8, 6] (replace 3 elements with new elements 9 & 8)

items = [1, 2, 3, 4, 5, 6]
console.log('items -', items);
console.log('items.splice(2, 0, 8) -', items.splice(2, 0, 8)); // [] newArray will have starting from index 2 to end
console.log('items after splice(2, 0, 8) -', items); //[ 1, 2, 8, 3, 4, 5 ] original array will have the left over items which are index 0 & 1
//splice(2, 0, 8) this inserted 8 at index 8 on the original item
items = [1, 2, 3, 4, 5]
console.log('items -', items);
console.log('items.splice(2, 3, 8) -', items.splice(2, 3, 8)); // [ 3, 4, 5 ]newArray will have starting from index 2 to end
console.log('items after splice(2, 3, 8) -', items); // [ 1, 2, 8 ]original array will have the left over items which are index 0 & 1

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

// PALANDROM
const palandrom = () => {
    const input = "race a car";
    console.log("input - ", input);

    console.log(
      input
        .toLowerCase()
        .replace(/[^A-Za-z]/g, "")
        .split("")
        .reverse()
        .join("")
    );
// const input = "race a car";
// const x = input.split(' ').join('').split('')
// x.reverse().join('')
}