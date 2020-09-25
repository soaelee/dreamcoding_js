//1. Use strict
//added in ES5
//use this for Vanila Javascript.
"use strict";

//2. Variable rw(read/write)
//var(dont' ever use this!) has no scope Q. var hoisting (move declaration from bottom to top)
//let (added in ES6)
let globalName = "global name";
{
  let name = "soae";
  console.log(name);
  name = "jaemoon";
  console.log(name);
}

console.log(name);
console.log(globalName);

//3. Constant r(read only);
//favor immutable data type always for a few reasons:
// - security, thread safety, reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
// primitive, single item: number, string, boolean, mull, undefined, symbol
// object, box container => reference
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`type: ${typeof count}`);
console.log(`type: ${typeof size}`);
//number - special numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const soae = "soae";
const greeting = "hello" + soae;
console.log(`type: ${typeof greeting}`);

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3 < 1; //false

//null
let nothing = null;

//undefined
let x;

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const symbolfor1 = Symbol.for("id");
const symbolfor2 = Symbol.for("id");
console.log(symbolfor1 === symbolfor2);
//How to write symbol's value
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0));
console.log(typeof text);
text = 1;
console.log(typeof text);
text = "7" + 5;
console.log(text);
text = "8" / "2";
console.log(text);
//Runtime Error
//console.log(text.charAt(0));

//6. Object, real-life object, data structure
const soae = { name: "soae", age: 154 };
soae.age = 152;
