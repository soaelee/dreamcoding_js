'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);//last value

console.clear();

// 3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
//c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('berry', 'orange');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);
//unshift: add an item to the beginning
fruits.unshift('lemon');
console.log(fruits);
//shift: remove an item from the e=beginning
fruits.shift();
console.log(fruits);
//splice: remove an item by index position
fruits.push('peach', 'lemon');
console.log(fruits);
//fruits.splice(1);이렇게 하면 지정한 index부터 끝까지 지움
//fruits.splice(1, 1); //1번 index부터 1개 삭제
fruits.splice(0, 2, 'grape', 'orange') //0번 인덱스부터 두개 지우고 뒤에 두개를 그 자리에 넣어줘!
console.log(fruits);
//note!! shift, unshift are slower than pop, push

//concat: combine two arrays 
const fruits2 = ['coconut', 'strawberry'];
const newFruit = fruits.concat(fruits2);
console.log(newFruit);

// 5. Searching
console.clear();
//indexOf: find th index
console.log(fruits.indexOf('orange'));
console.log(fruits.indexOf('apple'));
//includes: boolean value
console.log(fruits.includes('apple'));
//lastIndexOf
fruits.push('grape');
console.log(fruits.lastIndexOf('grape'));

