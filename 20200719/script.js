function app() {
  radius = prompt("반지름을 입력하세요.");
  radiusNum = parseInt(radius, 10);
  area = areaOfCircle(radius);
  alert(`원의 넓이는 ${area} 입니다.`);
}

function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}

// app();

function isEven(num) {
  return (num % 2) === 0; 
  // 이 식 자체가 조건을 boolean 값을 return 하기 때문에 따로 3항연산자 작업해줄 필요 없음.
  // if(num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function max1(num1, num2) {
  return Math.max(num1, num2);
}

function max(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
  // return num1 > num2 ? num1 : num2;
}

function fizzBuzz(num) {
  // if(num % 3 === 0 && num % 5 === 0) {
  //   return "FizzBuzz";
  // } else if(num % 3 === 0) {
  //    return "Fizz";
  // } else if(num % 5 === 0) {
  //   return "Buzz";
  // } else {
  //   return num;
  // }

  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

// console.log(fizzBuzz(1));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

function grade(korean, english, math) {
  const totalScore = korean + english + math;
  const average = totalScore / 3;
  if (average >= 90) return "수";
  if (average >= 80) return "우";
  if (average >= 70) return "미";
  if (average >= 60) return "양";
  return "가";
}

// console.log(grade(100,100,100));
// console.log(grade(50,100,100));
// console.log(grade(80,70,70));
// console.log(grade(50,50,60));

function getDayOfWeek(num) {
  switch (num) {
    case 0 : return "Sunday";
    case 1 : return "Monday";
    case 2 : return "Tuesday";
    case 3 : return "Wednesday";
    case 4 : return "Thursday";
    case 5 : return "Friday";
    case 6 : return "Saturday";
    default : return null;
  }
}

// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(11));

function displayGugudan(dan) {
  let i = 1;
  while(i < 10) {
    console.log(`${ dan } * ${ i } = ${ dan * i }`);
    i++;
  }
}

// displayGugudan(9);


function fizzBuzzGame(num) {
  let count = 1
  while (count <= num) {
    console.log(fizzBuzz(count));
    count++;
  }
}

// fizzBuzzGame(5);


// 아래의 방법은 비효율적임.
function fizzBuzzGame2(num) {
  let count = 1;
  while (count <= num) {
    if (count % 15 === 0) {
      console.log("FizzBuzz");
    } else if (count % 5 === 0) {
      console.log("Buzz");
    } else if (count % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(count);
    }
    count++;
  }
}

function htmlFizzBuzzGame() {

  const input = document.forms[0]
  input.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputValue = document.querySelector("#fizzBuzzInput").value;
    document.querySelector('#fizzBuzzResult').innerHTML = fizzBuzz(inputValue);
  })
}

htmlFizzBuzzGame();





