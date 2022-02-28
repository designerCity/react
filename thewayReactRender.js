// react component 는 props 와 state 를 이용하여 데이터마다 다른 화면을 나타낸다. 


// state 가 바뀔 때 react 가 rendering 하는 방식에 대해
// 순수 JS 를 이용하여 여러 요소를 변경하면 번거로움과 버그가 발생할 확률이 높아진다. 
// react 는 새로 렌더링하는 방식을 사용한다. 
// 직접 요소가 변경되는 것이 아닌, state 값이 변경된다. 
// 이때 react 가 함수를 실행하면서 새로운 state 값이 적용된 element 를 return 하게 된다.
// 즉, 통째로 다시 rendering 하게 되는 것이다. => 문제점 : 아무 변화가 없어도 다시 렌더링하게 된다. 
// 이러한 문제점을 해결하기 위해서 react 에서는 JS 의 DOM tree 를 본떠서 만든 Virtual DOM(가상 DOM) 을 활용한다. 


// 그래서 element 를 새로 rendering 할때 실제 DOM tree 에 바로 반영하는 것이 아니라, 일단 Virtual DOM 에 적용한다.
// state 변경 전의 Virtual DOM 과 state 변경 후의 Virtual DOM 을 비교한다.
// 그래서 바뀐 부분만 찾아서 각각에 해당하는 실제 DOM Node 만을 변경한다.


// 이렇게 rendering 하는 것의 장점 

// 1. 개발자가 직접 DOM Node 를 신경 쓸 필요가 없어서 단순하고 깔끔한 코드를 작성을 할 수 있다.
// 2. 변경 사항들을 react 가 적당히 모아서 처리 가능하다. ==> 변경사항들을 효율적으로 처리가능하다. 
// 3. 효율적으로 화면을 처리할 수 있다. 


// transpiling : 웹 브라우저에서 JSX 문법을 알아 들을 수 없기 때문에, JS 문법으로 바꾸는 과정 
// trnspiler : 이렇게 번역하는 주체를 말한다. 
// state 가 바뀔 때 react 가 rendering 하는 방식에 대해
// 순수 JS 를 이용하여 여러 요소를 변경하면 번거로움과 버그가 발생할 확률이 높아진다. 
// react 는 새로 렌더링하는 방식을 사용하기에 브라우저는 JSX 문법을 알아들을 수 없다.
// 이때 유용한 것이 BABELJS 인데, 이는 JSX 문법이 어떻게 순수 JS 로 번역되는지 알 수 있다.
// BABEL 의 Try it out 


// 번들 : 브라우저의 실행하는 속도를 높이기 위해 압축하여 만든 파일 
// 번들링 : 압축하는 과정  ex build 
