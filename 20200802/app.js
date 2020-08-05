// * 함수 스코프와 블록 스코프에 대해서 배워보자! *

// 함수 밖에 선언되어 잇는 변수를 전역변수라고 한다.

function f() {
  // 함수 내에 변수 이름 window가 선언되어 있으면 함수 내에서 찾음.
  // 그러나 함수 내에 없는 경우 함수 밖에 선언되어 있는 것이 있는지 찾아본다.

  // window, document, math 등은 system에서 정의하고 있는 변수라서 밖에서 선언하지 않아도 사용할 수 있다.

  // 변수가 인식될 수 있는 범위를 스코프라고 한다.
  // f라는 함수 내에서의 스코프란 { } 여기 이 안이다.
  // 함수 스코프 내에서 변수가 선언되어있으면 함수 밖에서는 사용할 수 없다.

  // 기본적으로 함수단위가 scope의 단위이다.

  // 함수 내부에서 선언되어있는 변수를 지역변수라고 한다.

  setInterval(function() {
    console.log(new Date());
  }, 1000)

  // 함수 내에 또 다른 함수가 정의되어있는 경우?
  function f2() {
    const c = 2;
    console.log(c);  /// f2 함수 내부에 const c 가 있기 때문에 console.log(c) 가 가능하다.

    // 함수 외부에서 안으로 접근할 수는 없다.
  }
  f2();

  // 여기서는 console.log(c) 라고 하면 오류난다.

}
// 여기서는 f2(); 라고 f2함수를 호출 할 수 없다.
f();


// 전역변수를 사용하면 app이 위험하다!!
// 가능하면 함수의 인자로 전달해서 사용하는게 좋다.
// 함수에서 인자로 전달 받아서 사용하는 경우 어디에도 의존하고 있지 않아서 함수 재사용이 가능하다.

function badFunctionPattern (x,y) {
  Date();  // 이 경우에는 Date가 전역에 있는 환경에서만 사용할 수 있는 코드가 된다.
}

var d = "d";
let c = "c";
const b = "b";
function f() {
  console.log(a);
  var a = 1; // 이건 undefined가 나온다
  
  console.log(b); // 이건 error 가 나온다! 
  //일단 함수 scope 내에서 찾아야하기 때문에 함수 밖에 있는 const b 보다 하단에 있는 라인을 먼저 발견하게 된다.
  const b = 1;

  console.log(c); // 이것도 const b 와 똑같은 결과!
  let c = 1;

  // var d; 이렇게 먼저 올라옴.
  console.log(d); // 이것도 undefined!
  var d = 1; // 여기서 var d는 

  // const 와 let 은 선언되기 전에 사용하려고 하면 에러가 나지만
  // var 는 호이스팅이 되어서 선언이 먼저 되기 때문에 먼저 사용이 가능하긴 하지만 undefined이 된다.
  // 
}

f();




function functionScope() {
  if(true) {
    console.log(a); // TDZ : temporal Dead Zone
    const a = 1;
  }
}


// <블록 스코프>

function f() {
  if(true) {
    const a = 1;
    let b = 1;
    var c = 1;
  }
  console.log(a); // 이렇게 접근 못한다. 에러가 난다. (블록 스코프)
  console.log(b); // 이것도 에러(블록스코프)
  console.log(c); // 이것은 가능 왜냐하면 var는 "함수 스코프" 이기 때문이다.
}

f();

// </ 블록스코프>


// < 실행 컨텍스트 >

function f() {
  console.log(this);
  console.log(arguments);
  // this와 arguments는 함수가 실행될 때마다 새로 생김.
  // 마치.. function f(this, arguments) {} 처럼 동작함.
  //

}
f();

// 함수가 실행될 때 마다 생기는 컨텍스트
// 컨텍스트 = 맥락?



// 1. VO (Variable Object) :  arguments, parameter, local variable, 
// 2. thisValue(this)
// 3. scope chain

// 함수가 실행되면 엔진 레벨에서 위의 1,2,3 이 객체로 생김.
// 함수를 쭉 읽은 다음에 함수 내부의 내용들을 1,2,3 셋팅해놓는다.

// scope chain :
// 함수 스코프와 블록 스코프..
// 블록체인에서 변수를 먼저 찾고 거기에 없으면 그 밖에 스코프를 가고 또 거기에도 없으면 또 다음 스코프로 가고...
// 점진적으로?!?

// arguments
// arguments는 함수가 외부에서 전달될 때 받는 값을 [] 배열인 것 처럼 동작하게 한다.

function arguFunction () {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[3]);
}

arguFunction("abc",1,2,3,4,5,6);


// </실행 컨텍스트>


// <this>
// 함수를 "호출하는 방법"에 의해 결정.

function f() {
  console.log(this);
}

f(); // 1. 함수호출
// 그냥 이렇게 호출하면 this 는 Window가 찍힘
// 그러나

new f(); // 2. new 호출
// 이렇게 호출되면, 로그로 찍히는 this가 다름.

const obj = {
  func : f
}

obj.func(); // 3. 메서드 호출
// 이 객체에 넣어서 객체의 함수로써(메서드로써) 호출 경우에는 this 는 obj가 된다.

f.call({name: "hojeong"}); // 4. f를 객체인 것 처럼 호출
f.apply({name: "hojeong2"});

// 시간 적으로  function f(){} 를 먼저 만들어놔야한다
// 함수가 어떻게 호출될 것인지 충분히 설명이 되어야한다.


// </this>


// < 클로져 (closure) >



function f() {
  // 자유변수가 있는 환경이 lexical environment라고 한다.
  const a = 1; // 자유변수
  const b = 3; 
  return function() {
    a++;
    a = b + a;
    return a;
  } // 이 함수가 closure
}

// 실행컨텍스트는 함수의 실행이 끝나면 없어짐.
const inner = f();
// 그런데 이렇게 되는 경우에...
// inner 라는 함수 내부에서 밖에 있는 a가 계속 접근되고 있어서
// a 가 사라지지 않고 그대로 남아있음.

// </ 클로져 >



// FIFO - > 큐
// LIFO - > 스택


// <call stack>

function a() {
  console.log("a");
  b();
}
function b() {
  console.log("b");
  c();
}
function c() {
  console.log("c");
}
console.time("time");
setTimeout(function() {
    console.log("setTimeout");
    console.timeEnd("time");
}, 1000);
a();

//콜스택이 비워진 다음에 setTimeout 함수가 que에 들어가서 실행됨.

// </call stack>


// <object>

const student = {
  name: "hojeong",
  hp: 1000,
  study: function(subject) {
    this.hp--;
    console.log(`${this.name}님, ${subject}을(를) 공부해서 생명력이 ${this.hp}이 되었습니다.`);
  }
}
student.study("수학");  // 여기서 this는 student를 가리킨다.
student.study("영어");
student.study("과학");

console.log(student.toString()); // 이게 동작한다. 왜? toString은 없는데?
// 리터럴로 객체를 만들면 자동으로 기본적으로 만들어주는 메서드가 있다.
// 프로토타입 체인 : 객체에 . (쩜) 찍고 쓸 때에 타고 올라가는거..


//아래는 ES6 전에 쓰던 방법
function Student(name, hp) {  // 관례적으로 생성자 함수는 대문자를 쓴다. new로 호출하기를 기대하는 함수이다.
  this.name = name;
  this.hp = hp;
}
Student.prototype.study = function(subject) {
  this.hp--;
  console.log(`${this.name}님, ${subject}을(를) 공부해서 생명력이 ${this.hp}이 되었습니다.`);
}
const st1 = new Student("hojeong", 1993);
const st2 = new Student("lukas", 1990);

// 어떤 함수를 new해서 호출하면 객체가 반환됨 return this 처럼..

// ES6 이후에는 class를 사용함
class Student2 {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  study(subject) {
    this.hp --;
    console.log(`${this.name}님, ${subject}을(를) 공부해서 생명력이 ${this.hp}이 되었습니다.`);
  }
}

const st3 = new Student2("hoki", 2000);

// </object>

const number = [];
console.log(numbers);

const number2 = new Array();

// 결과식을 구현하세요

const numbers = [2,4,8,16,32,64];
const square = (function() {
  const result = [];
  for(let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]*numbers[i]);
  }
  return result;
})(numbers);

console.log(square); // [4,16,64,256,1024,4096]

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
const upper = (function() {
  const result = [];
  for(let i = 0; i < alphabet.length; i++) {
    result.push(alphabet[i].toUpperCase(alphabet[i]));
  }
  return result;
})(alphabet);

console.log(upper); // ['A', 'B' ...]


function getMap(list, cb) {
  const result = [];
  for(let i = 0 ; i < list.length; i++) {
    const d = cb(list[i]);
    result.push(d);
  }
  return result;
}

const square = getMap(numbers, function(v) {
  return v * v;
});

const upper = getMap(alphabet, function(v) {
  return v.toUpperCase();
})


// <수호님 map>
function getSquare(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
      const d = data[i] * data[i];
      result.push(d);
  }
  return result;
}
function getUpperAlphabet(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
      const d = data[i].toUpperCase()
      result.push(d);
  }
  return result;
}

function map(list, cb) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
      const d = cb(list[i]);
      result.push(d);
  }
  return result;
}
const numbers = [1,2,3,4,5,6];
//const even = filter(numbers);
//console.log(even); // [2,4,6]
//const square = getSquare(numbers);
const square = map(numbers, function(v) {
  return v * v;
})
const alphabet = ['a','b','c','d','e']
//const upper = getUpperAlphabet(alphabet);
const upper = map(alphabet, function(v) {
  return v.toUpperCase();
});
//console.log(upper);
//console.log(square);

// </map>


/// 과제!!! 

const numbers = [1,2,4,5,6,7,8,9];
const even = filter(numbers);
console.log(even); //  [2,4,6,8]
