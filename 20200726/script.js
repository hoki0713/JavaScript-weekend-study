function max(a,b,c) {
  if(a > b) return a > c ? a : c;
  if(a < b) return b > c ? b : c;
}

console.log(max(10,11,9));


function sum(numArray) {
  let sumTotal = 0;
  for(let i = 0; i < numArray.length; i++) {
    sumTotal += numArray[i];
  }
  return sumTotal;
}

console.log(sum([1,2,3,4,5]));


// 뒤에서부터 배열의 요소를 더하는 함수
function sumFromBack(numbers) {
  let total = 0;
  let i = numbers.length-1;
  while(i--) {
    total += numbers[i];
  }
  return total;
}

// 배열에서 가장 큰 수 찾기
function findMaxNum(numbers) {
  let maxNum = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if (maxNum < numbers[i]) maxNum = numbers[i];
  }
  return maxNum;
}

console.log(findMaxNum([2,5,6,3,9,10]));

// 배열에서 가장 작은 수 찾기
function findMinNum(numbers) {
  let minNum = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if(minNum > numbers[i]) minNum = numbers[i];
  }
  return minNum;
}

console.log(findMinNum([-1,0,5,-100,10]));


// 큰 수 찾기와 작은 수 찾기의 중복된 부분 제거하는 코드 고민해보기!
// 달라지는 부분을 외부에서 받으면 됨.


function countIf(array, target) {
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) counter++;
  }
  return counter;
}

const genders = ["남", "여", "여", "여", "남", "여", "남", "여"];

console.log(countIf(genders, "남"));
console.log(countIf(genders, "여"));

console.log(countIf(["남", "여", "여", "여", "남", "여", "남", "여"],"남"));


// getDayOfWeek(조건문(식)없이 구현);

function getDayOfWeek(day, code) {
  // const week = {
  //   KR: ["일","월","화","수","목","금","토"],
  //   US: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // }
  // return week[code][day]; 
  return {
    KR: ["일","월","화","수","목","금","토"],
    US: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }[code][day];
}

console.log(getDayOfWeek(0, "KR")); // "Sunday"

function $(selector) {
  const el = document.querySelector(selector);

  return {
    on: function(event, cb) {
      el.addEventListener(event, cb);
    },
    addClass: (event) => {},
    removeClass(event) {}
  };
}

const btn = $("#btn")
btn.on("click", function(e){
  alert("버튼 클릭!");
});

function renderHtml(view) {
  const screen = document.querySelector("#screen");
  screen.innerHTML = view;
}

renderHtml(button({className: "btn-big", children: "hihi"}));

function button(props) {
  return `<button class="${props.className}">${props.children}</button>`
}