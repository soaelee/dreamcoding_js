'use strict';

//1. Function expression
//a function declaration can be called earlier than it is defined.(histed)
//a function expression is created when the execution reaches it

const print = function () { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();

//2. Call back function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer == 'love') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

//named function
// better debugging in debugger's stack traces

const printNo = function print() {
    console.log('no!');
};

//3. Arrow function
//always anonymous
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
}

//IIEE: Immediately Invoked function expression
(function hello() {
    console.log('IIFE');
})();