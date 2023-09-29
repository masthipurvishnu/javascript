
  /*
The past, current state & future of JavaScript frameworks
https://www.youtube.com/watch?v=5EsLj3JOdE0

FUll stack JS/React
React + Next.JS
==========================================
Learn more on promises...

q:
const x = ' '
x.split(' ')
(2) ['', ''] //?
const x = ' '
x.split('')
[' '] //?
const x = ''
x.split(' ')
[''] //?

-------------------------------------------------

-------------------------------
Object.create()
Object.assign()
Object.entries()
Object.keys()
Object.values()
Object.is() ====??

-------------------------------
pop
shift
push
unshif
reverse

concat
includes => true/false
indexOf
some      : return true on the first items which satisfies the condition
every     : returns true if all the items satisfies the condition.
find      : returns the first item that satisfies the condition
findIndex : returns the first index that satisfies the condition
at

forEach
map
flat()
flat(depth)
flatMap() = map() + flat()
flatMap() method that maps each element in an array using a mapping function and flattens the result into a new array
The map() method creates a new array whose elements are the results of a mapping function.
The flat() method creates a new array with the elements of the subarrays concatenated into it.
join - array into string with all the values.
split - string into an array

slice
It is not a distructive method, original item wont be modified.
splice 
Splice can be used for 
1. remove set of items from an array
2. inert items in an arrary
4. replace items in an arrary
3. delete an item from an array
5. And it is a distructive method. it modifies the original item
---------------------------------------------------------------------------------------

    https://www.youtube.com/watch?v=0m3lBRVSTH8
    1. Create an array with the following fruits: apple, orange, banana. Use the correct array mthod to 
    add the fruits cherry and pineapple to the beginning of the array. Then add the fruids
    plum and grapes to the end of the array. Once again using the relevant array method.
    console.log(fruits);
    fruits.splice(0, 0, "cherry ", "pineapple"); // ['cherry ', 'pineapple', 'apple', 'orange', 'banana']
    // fruits.push("plums", "graphs"); //['cherry ', 'pineapple', 'apple', 'orange', 'banana', 'plums', 'graphs']
    // same as push
    fruits.splice(fruits.length, 0, "plums", "graphs"); //['cherry ', 'pineapple', 'apple', 'orange', 'banana', 'plums', 'graphs']
    console.log(fruits);

    2. Replace orange with lemon using the splice method
    const fruits = ["apple", "orange", "banana"];
    console.log(fruits);
    fruits.splice(1, 1, "lemon");
    console.log(fruits); //['apple', 'lemon', 'banana']

    3. Sort the values alphabetically
    console.log(fruits.sort()) //['apple', 'banana', 'orange']
  */

/*
1. recoman sequence (rec) - recaman.js
2. Write a common function/method to sendEmail
    1. fire & forget => no responspone 
    2. with attachment
    3. with attachment + acknowledgement
3. 

JS runs on browsers and node.js environments.
As well there are third party runtime environments
like cloudFlares (runtime workers), deno, ben etc.

2023 JavaScript Predictions: What to Expect
https://www.youtube.com/watch?v=8SgwWpm8M4Y
Ship less JS code/files to browsers, using
Astro build tools.
AStro islands -> web architecture, 
static, interactive, dynamic etc.
fresh framework  (ben) - for build/shiping to browser.
Remix - less JS shipping to browser, handling more JS at server.
NextJS -> server side   
    React Servcer Components...


Default values of a variable in JS is undefined. 
questpond
JavaScript Interview Questions & Answers

ES6:
Brendan Eich of Netscape initially; & founder of mozilla

let/const
destructuring
spread operator
REST operator
this
Objects
Classes
Arrow functions
Modules


const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
}
// Destructure properties into variables
const { id, title, date } = note
//Spread operator
// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools)
// spread opr
const x = [...tools]
console.log(x) //  ['hammer', 'screwdriver']

const allTools = [...tools, ...otherTools]
console.log(allTools) // ['hammer', 'screwdriver', 'wrench', 'saw']

REST opr
//copy user object - is spread operator
function restTest(one, two, ...args) {
  console.log(one)
  console.log(two)
  console.log(args)
}

restTest(1, 2, 3, 4, 5, 6)
Output
1
2
[3, 4, 5, 6]

const [firstTool, ...x] = ['hammer', 'screwdriver', 'wrench']
console.log(firstTool) //hammer
console.log(x) //['screwdriver', 'wrench']

When a JS object is created through
1. literals => the object will have its own properties (obj.hasOwn or obj.hasOwnProperty).
2. Object.create => the object will have properties through prototype. NOT its own.
3. Consturctor => ??

const person = { name: 'John' };
console.log(Object.hasOwn(person, 'name'));// true
console.log(Object.hasOwn(person, 'age'));// false

console.log(person.hasOwnProperty('name'));// true
console.log(person.hasOwnProperty('age'));// false

const person2 = Object.create({gender: 'male'});
console.log(Object.hasOwn(person2, 'gender')); // false
console.log(person.hasOwnProperty('gender')); //false
 // gender is not an own property of person, it exist on the person2 prototype

Ways to creat javascript object:
1. Literals
var patient = {'name': 'bob', 'age':10}
patient.Admit = function() {
        console.log('admited')
}



2. OBject.create()
var patient = {'name': 'bob', 'age':10}
patient.Admit = function() {
        console.log('admited')
}
var newPatient = Object.create(pat)
newPatient.city = 'Dallas'//new propertiy

3. Constructor functions
function patient() {
    this.name='';
    this.age=''
    this.Admit = function () {
        console.log('admited')
    }
}
const p1 = new patient()
console.log(p1.age) // ''
console.log(p1.Admit()) // admitted

4. ES6 Classes
class PatientClass {
    constructor(name, age) {
        this.name=name
        this.age: age
    },
    Admit() {
        console.log('admited')
    }
}
var p = new PatientClass('bob', 10)


2. Factory functions
3. Constructor functions
Objects can be created using Literals.
const circle = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw: function() {
        console.log('draw')
    }
}
If an object has behaviour (like methods & properties) then creating an 
object with liternals cant be reusable, it will be an issues
if we want to change the behaviour later.
Soluction to this is, a factory function or a constructure function.
// factory function
fucntion createCircle(radius) {
    return {
    radius,
    draw: function() {
        console.log('draw')
    }
  }
}
const circle = createCircle(10) //calling factory function.
//Constructor function
fucntion Circle(radius)
    console.log('this', this)
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}
// const anotherCircle = Circle(10) // 'this' will refers to window object if you forgot to use new operator, this
would be a disaster.
const anotherCircle = new Circle(10) // 'this' will refers to caller context.
//new will , 3 things happens
1. this new operator will create an empty object
2. set 'this' points to that object
3. return the object from the constructor function.

If you return an object, then it is a factory function.
If you use this keyword along with new operator, you refer that functiin as constructor fucniton.
Both are same. Then which is better...
Factor functions are used with arrow functions in React mostly.
People with C#/Java would prefer, constructor functions.

Functions in JavaScript have a property called a prototype. When we call a JavaScript constructor to create an object, 
all the properties of the constructor's prototype are then made available to the new object.

Constructor properties
Every object in JS has a constructor property.
let x = {}
// JS runtime engine translates as 
// let x = new Object() // which is same/

Buildtin construcors:
String literals has


Often we use string literals '', "", ``
//new String()
new Boolean() //true, false
new Number() //0,1,2,3...
These literals are more convient than buildin constructors.

Functions are objects in JavaScript.
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        log('draw')
    }
}
const circleObj = new Circle(1)
//which is same as 
const circleObj = Circle.call({}, 1) // anyhae JS runtime convers like this 
const circleObj = Circle.apply({}, [1]) //Circle.apply({}, [1,2,3]) incase of more argmunts.

Primities are copied by their value.
Object are copied by their reference.

How do you Define Getter/Setters
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x=0, y:0}
    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    //To get the default locations, you need to call a method...
    // to get it as propertiy, you use getter/setters.
    Object.defineProperty(this, 'defaultLocation', 
    get: function() {
        return defaultLocation
    })
    set:fucntion(value) {
        const newValue = calculation(value)
        this.defaultLocation = newValue
    }
}
var c1 = new Circle(1)
c1.getDefaultLocation() // {x:0, y:0}
console.log(c1.radius) // 1
console.log(c1.defaultLocation) // {x:0, y:0}


ES 2022

1. private class fields
private variables
Private fields starts with #
#isClicked = false

2. Static Class fields
static PI = 3.14 //static variable
static #PI = 3.14 //static & private to the class

3. await can be used without async as function type.
using await by default considers that function is async function.

private
public
protect
# => for private
#isClicked = false

5. Object.hasOwn
const obj = {
 a:1, a:2
}
console.log(obj.toString()) // [object Object]


https://www.youtube.com/watch?v=Zb4dPi7CANU
Why do we call JS as dynamic language?
JavaScript is a dynamic language means data types of the variables can change during the runtime.


Web assembly usage.
Web assemblies can be created in C language for intensive 
calculations/operations and can be consumed in Javascript.

Web Assembly(WASM) Calculater Created in JavaScript
https://www.youtube.com/watch?v=JqCaynNwtOA


Design Patterns
Delegation pattern
class Rectangle(val width: Int, val height: Int) {
    fun area() = width * height
}

class Window(val bounds: Rectangle) {
    // Delegation
    fun area() = bounds.area()
}

Composition/Inheritance, through prototype property
Vue: like slots..
parent component can have slots as children...

React: {children} render methods 
Promises, async/await
Cross-site request forgery (CSRF/XSRF) through html..
REACT: dangarouslyhtml 

Static Program Analysis
ESLint
JSLint



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
        // <div>This is "a google":</div>
        // <div id="el"></div>
        // Output: This is "a google":
        // 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

            .split("") // create an array from a string
            .some(function (v, i, a) { ... })
    // goes through an array until the function returns true, and ends than right away.
    // (doesn't loop through the whole array, if it finds an match earlier)
    /* Time complexity of solution: O(n) */

    // how to find duplicate/repeated characters in a string in javascript
    const getRepeatedChars = (str) => {
        const chars = {};
        for (const char of str) {
            chars[char] = (chars[char] || 0) + 1;
        }
        return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);

// console.log(Object.keys(chars))
// console.log(Object.entries(chars).filter((x) => x[1] >= 1).map(c=>c[0]))
// console.log(Object.entries(chars).filter((x) => x[1] > 1).map(c=>c[0]))
    }

    getRepeatedChars("aabbkdndiccoekdczufnrz"); // ["a", "b", "c", "d", "k", "n", "z"]

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
    }
    let n = 17;
    recaman(n);
/*
    // pennymac - nodeJS position
    // Jeremy & bobby
    1. Patterns and principles
    SOLID ?
        S ? single responsible pri ?
            how do you make it a single responsible ?
                1. js.prototype -> implementations with SRP principles
    2.
  */

/*
// ARRAY FUNCTIONS
    <script>
      this.context = "global";
      function someOtherMethod() {
        console.log(this.context);
      }
      function someMethod() {
        this.context = "local";
        someOtherMethod();
      }
      // someMethod(); // local
      var instance = new someMethod(); // global
    </script> 
    //2. 
    <script>
      this.context = "global";
      var someOtherMethod = () => {
        console.log(this.context); // global 
        // because of new instance, the someOtherMethod losts its context 
        // and refering to global context.
        // new instance will have its own context, this context was not passed to this method.
      };
      function someMethod() {
        this.context = "local";
        console.log(this.context); // local
        someOtherMethod();
      }
      // someMethod(); // local
      var instance = new someMethod(); 
      console.log(this.context);// global
    </script>
    one way to pass callers context to the method is with the use of 
    bind method.
    // var x = someOtherMethod.bind(this);
    // x();
    The other way is through arrow functions.
    Arrorw fun holds the context of the call function. 

    <script>
      this.context = "global";
      function someOtherMethod() {
        console.log(this.context);
      }
      function someMethod() {
        this.context = "local";

        // option 1
        // var x = someOtherMethod.bind(this);
        // x();
        // option 2 in case of instance
        var someOtherMethod = () => {
          console.log(this.context);
        };
        someOtherMethod();
        
      }
      // someMethod(); // local
      var instance = new someMethod();
      console.log(this.context);
    </script>
    -------------------------
    Arrow functions
    https://www.youtube.com/watch?v=h33Srr5J9nY

    
class Person {
  constructor(name) {
    this.name = name;
    this.printNameFunction.bind(this);
  }
  printNameArrow() {
    setTimeout(() => {
      console.log(`Arrow : ${this.name}`);
    }, 100);
  }
  printNameFunction() {
    setTimeout(function () {
      console.log(`Function : ${this.name}`);
    }, 100);
  }
}

    var p = new Person("vv");
    p.printNameArrow(); // Arrow: vv 
    p.printNameFunction(); // Function: 
    // empty as the narmal function inside setTimeout could not find the 
    // the contenxt of the instance p, it looked at global scope and displayed nothing.
    */
    
    // StopWatch shohld have duration, start method, stop method, reset method.

function StopWatch() {
    this.duration = 0;
    this.isStarted = false;
    this.timmer = null;
    this.start = function () {
      if (this.isStarted) {
        throw Error("Stopwatch has already started");
      } else {
        this.isStarted = true;
        this.timmer = setInterval(() => {
          this.duration++;
        }, 1000);
      }
    };
    this.stop = function () {
      if (!this.isStarted) {
        throw Error("Stopwatch is NOT started.");
      } else {
        this.isStarted = false;
        this.duration = 0;
        clearInterval(this.timmer);
      }
    };
    this.reset = function () {
      if (this.isStarted) {
        this.isStarted = false;
      } else {
        this.isStarted = false;
      }
    };
  }
  
  // let dur = 0
  // const intervalID = setInterval(myCallback, 500);
  
  // function myCallback() {
  //   console.log(dur);
  //     dur++
  // }
  
  setTimeout(function () {
    console.log(1);
  });

  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
  setTimeout(function () {
    console.log(4);
  });

  console.log(5);
  /*
  //output
  2
  5
  3
  1
  4
  // because promise/async-await/process.nextTick() goes into MicroTask Queue of 
  // event loop, which will be taken care first.
  Where as setTimeout, setInterval, setImmediate goes into MacroTask Queue. 
  */