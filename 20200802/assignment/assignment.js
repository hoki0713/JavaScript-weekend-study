// 1. filter 함수 만들기 과제 (주어진 리스트에서 짝수만 뽑아내는 filter함수 만들기)

const numbers = [1,2,4,5,6,7,8,9];


function filter(arr, func) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i])) resultArr.push(arr[i]);
  }
  return resultArr;
}


const even = filter(numbers, function(number){
  return (number % 2 === 0);  
});
console.log(even); //  [2,4,6,8]



/**
* Array 메소드 연습
* 1. 19살 이상인 사람들 찾기
* 2. 김씨성을 가진 사람들 찾기
* 3. 이름이 박지성인 사람 객체 찾기
* 4. 이름이 박지성인 사람의 index 찾기
*/

const people = [{
  name: "김수호",
  age: 36
}, {
  name: "홍길동",
  age: 70
}, {
  name: "김영희",
  age: 15
}, {
  name: "김철수",
  age: 18
}, {
  name: "박지성",
  age: 37
}, {
  name: "김태희",
  age: 38
}, {
  name: "정지훈",
  age: 41
}];


console.log(people.filter(person => person.age >= 19).map(person => person.name));
console.log(people.filter(person => person.name.startsWith("김")).map(person => person.name));
console.log(people.find(person => person.name === "박지성"));
console.log(people.findIndex(person => person.name === "박지성"));