// filter 함수 만들기 과제 (주어진 리스트에서 짝수만 뽑아내는 filter함수 만들기)


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
