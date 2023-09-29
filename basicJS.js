/* <button onClick={() => setRates(postData.rates.map(el => el + 1))}>EnhanceRates</button> 
    using a inline arrouw fun inorder to pass event handler
    this is one way to stop calling the fn on comp load

    event bubbling -> valla default ga trigger avutha.. 
    event.preventdefault..: 
    event.stopporopgation : need event,  bubble
    evnet.stopimmediateprop +>
    onClick={(e) => {setRates(postData.rates.map(el => el + 1)}

    arrow fun , method
    function:
    method = fun assigninaged as a object property

    let userObj = function userObject() {
    return {
        uid: '1'
        dob: getDob() // this is called property method
    }
    }
    datattypes:
    primity
    bool
    string
    number
    big int
    int
    undefined
    null (typeof null) => object
    non primi: object
    array
    fun
    object

    JS: functions
    consturctor funs: if you captialize first name of the fn... 
    (check later?) class refs and constructor fns
    fun declaration => const x = incrementCounter
    function defination => funcion name () {} 
    function express => const x =  function () {} /using anonimous fn creating a fun exp
    arrow funs are annonimous fun

    IIFN => 
    (function name () {
        
        function dob () {
            return 'hello'
        }
    })()
    // react lo rayam.... 
    (IIFE), pronounced "iffy", are a common JavaScript pattern 
    that executes a function instantly after it's defined.
    Developers primarily use this pattern to ensure variables 
    are only accessible within the scope of the defined function.
    
//FOR FOR/IN FOR/OF
// The for and for/in looping constructs give you access to the index in the array, not the actual element
// forEach() and for/of, you get access to the array element itself


//FOREACH
// does not return or we cant return anything from forEach.
// if you want you can modify the original value within the forEach

// SHIFT
// shift() : Removes one element from starting
// Original array will have one element removed at front. 
// Returns newArray with the removed element
//UNSHIFT
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1,  ..., elementN)

// SLICE
// slice()
// slice(start)
// slice(start, end)

// SPLICE
// items.splice() // no changes to the original array but creates newArray with empty values
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)


rotateArray([1, 2, 3, 4, 5], 4)
// d is number of rotations
// output: [5, 1, 2, 3, 4]
// [2, 3, 4, 5, 1] => [3, 4, 5, 1, 2]=> [4, 5, 1, 2, 3]=> [5, 1, 2, 3, 4]
// PALANDROM
*/
