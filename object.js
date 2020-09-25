// Object
//one of the Javascript's data types
//a collection of related data and/or functionality.
//Nearly all objects in Javascript are instances of Object
//object = {key: value};

//1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax
const soae = { name: 'soae', age: 154 };

function print(person) {
    console.log(person.name);
    console.log(person.age)
}

const soae = { name: 'soae', age: 154 };
print(soae);

// with Js magic (dynamically typed language)
// can add properties later
soae.hasJob = false;
delete soae.hasJob;

//2. Computed properties
//key should be always string
console.log(soae.name);
console.log(soae['name']);

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}

printValue(soae, 'name');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 4 };
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('soae', 154);

//4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age
}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('random' in ellie);

//6. for..in vs for..of
//for(key in obj)
for (key in soae) {
    console.log(key);
}
//for(value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

//7. Fun cloning : reference 
//Object.assign(dest, [obj1, obj2, obj3...])

//얕은 복사
const user = { name: 'soae', age: '154' };
const user2 = user;
user2.name = "jamoon";
console.log(user);
//깊은 복사
const user4 = Object.assian({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
//뒤에서 계속 덮어씌움
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);