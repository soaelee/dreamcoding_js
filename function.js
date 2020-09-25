// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) {body... return;}
//one function === one thing
// naming = doSomething, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// function is object in JS

//2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'jjang';
}
const soae = { soae: 'soae' };
changeName(soae);
console.log(soae.name);

//3. Default parameters(added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi!');

//4. Rest parameters(added in ES6) == list format
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));

}

printAll('dream', 'coding', 'ellie');