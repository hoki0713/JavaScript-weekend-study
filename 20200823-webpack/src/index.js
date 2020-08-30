import Person from './Person';

new Person("hojeong").eat("야채곱창");

// webpack의 역할.. babel 하고 비슷해보이지만.. 좀 다름
// babel 은 1:1로 컴파일 됐는데
// webpack 은 모든 파일이 main.js 하나로 만들어짐
// 단.. webpack은 옛날 브라우저에서 들어가지 않음..
// 그래서 webpack을 이용해서 babel을 같이 사용한다.
// 개발을 할 때에는 mode=development 서비스 나갈땐 production
