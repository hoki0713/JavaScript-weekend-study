function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

function loop(cb, count) {
  let i = 1;
  while (i <= count) {
    cb(i++);
  }
}

const log = console.log;

// loop(log, 6);

// loop(function(i) {
//   console.log(fizzBuzz(i));
// }, 6);

// setTimeout(function() {
//   console.log(1);
// }, 1000)    // setTimeout은 지정된 시간 이후에 콜백함수 실행

// setInterval(function() {
//   console.log(1);
// }, 36000)    // setInterval은 지정된 시간마다 콜백함수 실행

// setInterval과 loop의 차이는?
// 동기냐 비동기냐의 차이.
// loop함수는 동기적인 코드
// setInterval은 비동기적인 코드.

function asyncForLoop(cb, count, timeout) {
  for (let i = 1; i <= count; i++) {
    setTimeout(function () {
      cb(i);
    }, timeout * i);
  }
}

function asyncWhileLoop(cb, count, timeout) {
  let i = 1;
  while (i <= count) {
    const index = i;
    setTimeout(function () {
      cb(index);
    }, timeout * index);
    i++;
  }
}

// asyncWhileLoop(
//   function (i) {
//     console.log(i);
//   },
//   5,
//   1000
// );

function asyncIntervalLoop(cb, count, timeout) {
  let i = 0;
  const intervalId = setInterval(function () {
    if (i++ < count) {
      cb(i);
    } else {
      clearInterval(intervalId);
    }
  }, timeout);
}

asyncIntervalLoop(function (i) {
  console.log(i);
},5,1000)