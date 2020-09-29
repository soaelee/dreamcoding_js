'use strict';

// Q1. make a string out of an array - array.join();
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string - array.split();
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
    const result2 = fruits.split(",", 2); //limit
    console.log(result);
    console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] - array.reverse();
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements - array.slice(s, s); ps. array.splice(s, n);
{
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0, 2); 시작idx, 개수
    //splice는 지정한 변수를 삭제하고 해당 변수들을 return하기 때문에 사용X
    const result = array.slice(2, 5); //시작idx, 끝idx(-1)
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 - array.find(callbackfunc)
//첫번째로 true인 요소를 반환하는것, 없으면 undefined
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students - array.filter(callbackfunc)
//true인 요소를 모두 새로운 배열로 반환하는 것
{
    const result = students.filter((student) => student.enrolled == true);
    console.log(result);
}

// Q7. make an array containing only the students' scores - array.map(callbackfunc);
// result should be: [45, 80, 90, 66, 88]
// 배열의 요소 한가지 한가지를 모두 다른 요소로 변환하는 것
{
    const result = students.map(student => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50 - array.some(callbackfunc);
//callback function이 true인 요소가 있는지 확인해주고, 하나라도 있으면 true 반환
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    //ps) every는 모든 요소가 조건을 만족해야 true 반환
    const result2 = students.every((student => student.score < 50));
    console.log(result2);
}

// Q9. compute students' average score
//callback의 반환값은 모든 요소의 누적된 value를 return한다 
//정의한 시작점부터 curr이 return 되어 순차적으로 prev에 전달됨
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores : array.map().join();
// result should be: '45, 80, 90, 66, 88'  
{
    const result = students.map((student) => student.score).join();
    console.log(result);

    //50점 이상인 아이들만 join해서 string으로
    //점수만 배열로 묶고() map 그리고 그 후에 50점 이상인 점수만 filtering해서 join한다
    const result2 = students.map((student) => student.score).filter((score) => score >= 50).join();
    console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    //오름차순 sort((a, b) => a - b) 내림차순 sort((a, b) => b - a)
    const result = students.map((student) => student.score).sort((a, b) => a - b).join();
    console.log(result);
}

