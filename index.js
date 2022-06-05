/*
Falsy values
------------
undefined
null
0
''
NaN
false

*/

console.log(2 + 2) //4
console.log(2 + '2') //22 JS assumes (it assuses lot of things like this)
console.log('2' + 2) //22
console.log('2' + '2') //22

var user = "2"
if (2 == user) { // JS assumes it is a string and compares as other one is string.
    console.log("condition is true");
}

if (2 === user) { // JS assumes it is a string and compares as other one is string.
    console.log("condition is true");
} else {
    console.log("condition is false");
}

console.log('111111111111');
// const logger = (x) => x + 1
// logger((1) => x + 1)

// const a = logger =() => { x + 1 })
//.then((x) => { console.log(x)

//}).catch((err) => {

// });
Promise.resolve(1)
    .then(x => x + 1)
    .then((x) => console.log(x))
    .then()
const b = Promise.resolve(1)
    .then(x => x + 1)
// .then((x) => console.log(x))
// .then()

console.log(b)