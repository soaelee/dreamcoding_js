'use strict';

//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Logical operators
const value1 = false;
const value2 = 4 < 2;
//가장 가벼운 것을 앞에 || 결과가 빨리 나올 조건을 앞에
//||(or) 
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('0ㅅ0');
    }
    return true;
}

//||(and)
//nullableObject && nullableObject.something

const nullableObject = null;
if (nullableObject != null) {
    nullableObject.something;
}

//3. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive ? true : false);
// === strict equlity, no type conversion
console.log(stringFive === numberFive ? true : false);
// object equlity by reference
const soae1 = { name: 'soae' };
const soae2 = { name: 'soae' };
const soae3 = soae1;
console.log(soae1 == soae2);
console.log(soae1.name == soae2.name);
console.log(soae1 === soae2);
console.log(soae1 === soae3);

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

// 4. Conditional operators: if
// if, else if, else

//5. Ternary operator: ?
//condition ? value1 : value2;
const name = 'soae';
console.log(name === 'soae' ? 'yes' : 'no');

//6. Switch statement
//switch( parameter(){
//case ' '  : break;
//case '':
//case '': break;
//default : ; break;     
//}

//6. Loops
// while loop, while the condition is truthy
//for(begin; condition; step)