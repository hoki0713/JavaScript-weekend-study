function reverseCount(num, f) {
  let count = num;
  while (count) {
    f(count);
    count --;
  }
}

function f(count) {
  console.log(count)
}

reverseCount(5,f);

// 2. 영어로 된 숫자를 숫자로 변환 하기 (1~10까지만...one two three four ... ten)
// 예외 처리는 없이 정해진 one ~ ten 이 입력이 정확히 들어온다고 가정하고 구현할것

function convertToNumber(enNum) {
  const enNumArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  for(let i = 0; i < enNumArray.length; i++) {
    if(enNum === enNumArray[i]) return i+1;
  }
}

console.log(convertToNumber('three'));

// 3. 입력에 아래와 같이 각각 쏘나타,K5,말리브,sm3,320D,A4, 에러처리, 되었을때 자동차 브랜드명을 출력
// sm3,320D,c200 의 브랜드는 직접 찾아보세요! 
// (찾아보라는 이유는 예를들어 전혀 모르는 차브랜드를 알아야 하는 회사에 입사했을때,
// 차브랜드에 대해서 조금이라도 이해하고 있어야 하기때문, 그리고 검색을 습관화!!)

/* 
function carBrand(car) {
  const brandByCar = [
    { keyword : '쏘나타', brand : '현대자동차' },
    { keyword : 'K5', brand : '기아자동차' },
    { keyword : '말리브', brand : '쉐보레' },
    { keyword : 'sm3', brand : '삼성르노' },
    { keyword : '320D', brand : 'BMW' },
    { keyword : 'A4', brand : 'Audi' }
  ];

  for(let i = 0; i < brandByCar.length; i++) {
    if(car === brandByCar[i].keyword) return brandByCar[i].brand;
    return "입력한 자동차 브랜드는 확인되지 않습니다."
  }
}
*/

function carBrand(car) {
  const brandByCar = {
    '쏘나타' : '현대자동차',
    'K5' : '기아자동차',
    '말리브' : '쉐보레',
    'sm3' : '삼성르노',
    '320D' : 'BMW',
    'A4' : 'Audi',
  };
  if (brandByCar[car] === undefined) return "입력한 자동차 브랜드는 확인되지 않습니다.";
  return brandByCar[car];

}
console.log(carBrand('쏘나타'));
console.log(carBrand('스터디'));



// 4. 1~ n까지의 합을 구하는 함수
//sum(100) // 1~100의 합 : 5050 

function sum(num) {
  let sumResult = 0;
  let count = 1;
  while(count <= num) {
    sumResult += count;
    count++;
  }
  return sumResult;
}

console.log(sum(100));

