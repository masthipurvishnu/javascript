

const { rejects } = require("assert");
const { resolve } = require("path");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// COMPLETELY CALLBACKS
var fun1 = function(callback) {
    setTimeout(() => {
        console.log("from setTimeout 1")
        if (typeof callback === 'function') {
            callback(1);
        }
    }, 3000);
}

var fun2 = function(callback) {
    setTimeout(() => {
        console.log("from setTimeout 2")
        if (typeof callback === 'function') {
            callback(2);
        }
    }, 2000);
}

var fun3 = function(callback) {
    setTimeout(() => {
        console.log("from setTimeout 3")
        if (typeof callback === 'function') {
            callback(3);
        }
    }, 1000);
}

//Through pure callbacks
// fun1(function(){
//     fun2(function(){
//         fun3(function(){
//             console.log("callback of fun3");
//         });
//     })
// });
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// The same above functionalty with ASYNC and AWAIT
// async/await implicitly resolves Promise.
var fun4 = async function() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("from setTimeout 4")
            resolve('resolve4');
        }, 3000);
    });
}

var fun5 = async function() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("from setTimeout 5")
            resolve('resolve5');
        }, 2000);
    });
}

var fun6 = async function() {
    return new Promise(resolve => {        
        setTimeout(() => {
            console.log("from setTimeout 6")
            resolve('resolve6');
        }, 1000);
    });
}

var funC1 = function(x){
    console.log("CALL BACK -", x);
}

//await always within async parent function BEFOR ES6.
// var main = async function(){
//     const r4 = await fun4();
//     const r5 = await fun5();
//     const r6 = await fun6();
// }

// main();

//await can work outside of async too after ES6.
// const r4 = await fun4();
// const r5 = await fun5();
// const r6 = await fun6();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// 3 error cases
// if a guy passes a value 1 return 'hello'
// if 0, throw 'error'
// through call back
// through promise

//3.1 error case with callback error case 
var fun7 = function(x, callback) {
    if(x === 0) {
        callback("ERROR 7"); //or new Error("==some error=======")
        return;
    }
    setTimeout(() => {
        if(typeof callback === 'function') {
            callback(null, "HELLO 7");
        }
    }, 1000);
}

// // with CALLBACK
// fun7(1, (err, resp)=>{
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log(resp);
// });

// fun7(0, (err, resp)=>{
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log(resp);
// });

// ----------------------------------------------------------- 
//3.2 error case with promise resolve/reject
// AS WE DONT HAVE TO WAIT(NO ASYNC CALLS), WE ARE NOT USING ASYNC/AWAIT HERE.
var fun8 = function(x) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(x === 1) {
                resolve("HELLO 8");
            }
        }, 3000);
        setTimeout(() => {
            if(x === 0) {
                reject("ERROR 8");
            }
        }, 1000);
    });
}

var res = fun8(1).then((response)=>{
    console.log(response)
}).catch((err) =>{
    console.log(err);
});

var res = fun8(0).then((response)=>{
    console.log(response)
}).catch((err) =>{
    console.log(err);
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//3.2 error case with promise resolve/reject - using async and await to get the order we want to display irrespective of setTimeOut
var fun9 = async function(x) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(x === 1) {
                resolve("HELLO 9");
            }
        }, 3000);
        setTimeout(() => {
            if(x === 0) {
                reject("ERROR 9");
            }
        }, 1000);
    });
}

var res = await fun9(1).then((response)=>{
    console.log(response)
}).catch((err) =>{
    console.log(err);
});

var res = await fun9(0).then((response)=>{
    console.log(response)
}).catch((err) =>{
    console.log(err);
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 




451







	yes I'm the most intelligence kid in this world



/usr/local/sbin
You should change the ownership of these directories to your user.
  sudo chown -R $(whoami) /usr/local/sbin
And make sure that your user has write permission.
  chmod u+w /usr/local/sbin
If that doesn't show you an update run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install


export PATH=/Users/vv_home/Downloads/mongodb-macos-x86_64-4.4.3/bin:$PATH


mongo "mongodb+srv://sandbox.cflxq.mongodb.net/m001-mongodb-basics" --username m001-student

Vishnus-Air:data vv_home$ mongo "mongodb+srv://sandbox.cflxq.mongodb.net/m001-mongodb-basics" --username m001-student

{"_id":{"$oid":"6008fc4ab39976e6eaacf92d"},"id":"11222-2019-VISH","certificate_name":"6107104","address":{"city":"dallas","street":"whitestone","zip":"70524"}}


Project: CITISTOR
Component: Self Service NETAPP Provisioning


Epic: 
Monitoring - 10
Provisioning - 80% (api)
UI-UserExperience - 80
Access - Directory, security (IDM) -70
Shared Creation 1 2 3 4 5 - 70
Audit Log - 50
Reports - 50
Production Storage - 5%



New Feature: Help
Help for NetApp Project for User.
As a user, I should able see help of The application which sign in form.

1. Sign in page should this help button
2. When user click on help button it should open up a model.
3. Model should have multiple tabs
4. Tab1 should be about the Token
5. Tab2 should be about usage of the applied.

6. Every page should have a help button
1. Page1: 
2. Page2
3. Page3












