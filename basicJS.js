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
*/