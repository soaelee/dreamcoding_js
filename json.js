'use strict';

//JSON
//Javascript Object Notation

//1. Objoct to JSON
//stringfy(ob)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'soae' : value;
});

console.log(json);
//2. JSON to Object
//partse(json)

console.clear();

const obj = JSON.parse(json, (key, value) => {
    return key === "birthDate" ? new Date(value) : value
});
console.log(obj);

console.log(rabbit.birthDate.getDate());
//string형태로 전환됨
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());

//유용한 사이트
//JSON Diff : Json 디버깅 유용
//JSON Beautifier : JSON format
