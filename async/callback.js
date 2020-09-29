'use strict';

//Javascript is synchronous.
//Execute the code block by order after hoisting.
//hoisting: var, function declaration

console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); //비동기
console.log('3'); //동기

//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hi')); //동기

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => { console.log('async') }, 2000); //비동기

//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {

        }, 2000);
    }
    getRoles(user, onSuccess, onError) {

    }
}