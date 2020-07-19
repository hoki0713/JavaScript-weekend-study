

/* 
숙제!
loop 함수를 구현하라

# 함수 호출
loop(function (i) { console.log(fizzBuzz(i));},6);  -> 1,2,Fizz,4,Buzz,Fizz 이렇게 되어야한다.

loop 함수는 외부에서 입력받은 숫자만큼 외부에서 입력 받은 로직을 실행한다.

비동기 함수도.. setTimeout, setInterval

*/

function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

function loop(f, num) {
  let count = 1;
  while (count <= num) {
    f(count);
    count++;
  }
}

loop(function (i) { console.log(fizzBuzz(i)); },6);


function app() {
  const time = parseInt(prompt("몇 초 후에 실행할까요?")*1000);
  function asyncLoop(f)
}