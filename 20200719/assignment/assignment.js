/* 
숙제!
loop 함수를 구현하라
*/

function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

function f(count){
  console.log(fizzBuzz(count));
}

// 1번 문제

function loop(f, num) {
  let count = 1;
  while (count <= num) {
    f(count);
    count++;
  }
}

// loop(f, 6);

// 2-1번 setInterval 문제

const doIt = (f, num) => {
  let count = 1;
  while (count <= num) {
    f(count);
    count++;
  }
}

function asyncLoop(f, num, sec) {
  setInterval(() => {
    loop(f, num);
  }, sec*1000);
}
// asyncLoop(f, 6, 1);


// 2-2번 setTimeout 문제

function asyncLoop2(f, num, sec) {
  setTimeout(() => {
    loop(f, num);
  }, sec*1000);
}

// asyncLoop2(f, 15, 5);

