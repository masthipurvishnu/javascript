/*

/*
Falsy values
------------
undefined
null
0
''
NaN
false


console.log(2 + 2); //4
console.log(2 + "2"); //22 JS assumes (it assuses lot of things like this)
console.log("2" + 2); //22 // + non strings into string and concatinates.
console.log("2" + "2"); //22 //+
console.log(2 - "2"); //0
console.log("2" - 2); //0 // - converts the non-numbers to numbers and calculates

var user = "2";
if (2 == user) {
  console.log("condition is true");
} // condition is true
if (2 === user) {
  console.log("condition is true");
} else {
  console.log("condition is false"); // this one
}

=>
 if you run a javascript inside a browser, Whta is the global object? //window

if you run a javascript inside a node.js server, Whta is the global object? //global


JavaScript type conversions
[] +	[] = "" (empty string)
[] +	{} =	"[object Object]" (string)
false +	[] =	"false" (string)
"123"(string)	+	1 (number)	"1231" (string)
"123" (string)	-	1 (number)	= 122 (number)
"123" (string)	-	"abc" (string) =	NaN (number)


console.log('test from testfunction1');
console.log([]); // [] - empty array
console.log([] + []); // empty string
console.log([] - []); // 0
console.log({} + []); // empty string
String({} + []) //    '[object Object]'
{ } +[] // 0
console.log(String([])); // empty string
console.log(String(true)); // 'true' string
console.log(String(false)); // 'false' string 

fun vs arrow fun
function testArguments() {
  console.log(arguments)
}

testArguments('how', 'many', 'arguments') // [secondary_label Output]

However, this has a few disadvantages. First, the arguments variable cannot be used with arrow functions.

const testArguments = () => {
  console.log(arguments)
}
testArguments('how', 'many', 'arguments') //Uncaught ReferenceError: arguments is not defined

-----------------------------------------------------
// COOKIES LocalStorage SessionStorage
localStorage.setItem("name", "vadla");
console.log(localStorage.getItem("name")); //vadla
localStorage.removeItem("name");
console.log(localStorage.getItem("name")); // null
sessionStorage.setItem("name", "vishnu");
console.log(sessionStorage.getItem("name")); //Vishnu
sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name")); // null

// document.cookie = "name=Vishnu";
document.cookie = "city=plano";
document.cookie = "Firstname=Vishnu1";
document.cookie = "Lastname=vadla";
document.cookie =
  "Firstname=Vishnuvardhan, expires=" + new Date(2023, 10, 12).toUTCString(); // overwrites Firstname
console.log(document.cookie); //Lastname=vadla; name=Vishnu; city=plano; Firstname=Vishnuvardhan, expires=Sun, 12 Nov 2023 06:00:00 GMT
document.cookie = "city=; Max-Age=0"; // remove specific cookie
console.log(document.cookie); //Lastname=vadla; name=Vishnu; Firstname=Vishnuvardhan, expires=Sun, 12 Nov 2023 06:00:00 GMT
//name still exists eventhough you remove from code or rename the name to Firstname.
//Lastname never expires.


-------------
EVENT LOOP
  promise/async-await/process.nextTick() goes into MicroTask Queue of 
  event loop, which will be taken care first.
  Where as setTimeout, setInterval, setImmediate goes into MacroTask Queue. 

// -----------------------------
//5 must known javascript fetures that almost nobody knows
1. ??
?? => not null and not undefined.
a || b => a or b
a && a.value => if an true execute a.value

function calculatePrice(price, taxes, description){
  //taxes = taxes || 0.05 //default value
  // description = description || 'Default item'
  taxes = taxes ?? 0.05 
  description = description ?? 'Default item'  
  const total    = price * (1 + takes)
  console.log(`${description} with tax: $${total}`)
  console.log(`%c${description} with tax: ${total}`, 'font-weight: bold; color:red')
  console.log(`%c${description} with tax: %c $${total}`, 'font-weight: bold", "color:green")
}
calculatePrice(100, 0.07, 'my item')
calculatePrice(100, 0, 'my other item')
calculatePrice(100, undefined, undefined)

2. ?
person?.address?.street

3. 
const name = 'kyle'
const favoriteFood = "rice"

const kyle = {
  name,
  favoriteFood
}
console.log(kyle)
this is same as :

const kyle = {
  name:name,
  favoriteFood:favoriteFood
}

5. defer : to makesure  JS loads after entier html body parser loads. for better performance.
<head>
  <script src = "script.js" defer />
</head>

Q:6: what is the output? 
  foo();
  bar();
  function foo() {
    console.log("function foo");
  }
  const bar = () => {
    console.log("fuction bar");
  };
Q7: how do you print both 10 and 20 one after another or when requried?
function getMultipleValues(){
  return 10
  return 20
}
const result = getMultiplevalues()
console.log(result)

Q8: What is the output?
  function* getMultipleValues() {
    yield 10;
    yield 20;
  }
  const testFunction = () => {
    console.log(getMultipleValues().next().value);
    console.log(getMultipleValues().next().value);
    console.log(getMultipleValues().next());
  };

Q9: how to convert JSON object into an array? and wise versa
    const person = {
      name: "rama",
      age: "11",
    };


  Ans:
  6. foo() is a class method, which will be hoisted at top during compile time
  and be accessed it before it is declared and results 'function foo" log message.
  bar() is a function expression or class property and does not hoisted, it 
  needs to be accesses after its declaration. In this
  case it throws error, bar is not a function
  Uncaught ReferenceError: Cannot access 'bar' before initialization
7. using javascript generator functions.
  function* getMultipleValues() {
    yield 10;
    yield 20;
  }
  const testFunction = () => {
    const result = getMultipleValues();
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next()); //{value:undefined, done: true}
  };

8. always 10 when you 
10
10
{value: 10, done: false}
9. 
const person = {
  name: "rama",
  age: "11",
};
// console.log(JSON.stringify(Object.entries(person)));
// console.log(Object.fromEntries(Object.entries(person)));
let arr = [];
const y = Object.keys(person).map((k) => {
  // const x = [];
  // x.push(k, person[k]); or just below
  return [k, person[k]];
});
console.log(JSON.stringify(y)); //[["name","rama"],["age","11"]]





*/
