import ReactDOM from 'react-dom';

const element = <h1> hi react ! </h1>;

consolt.log(element) // return 값이 자바스크립트 객체 Object 가 출력된다. 
                                    // react 에서는 이 객체를 react element 라고 한다.
ReactDOM.render(
  element,  // ReactDOM 의 render method 를 전달하면 react 가 객체를 해석해서 html 으로 렌더링을 한다.
  document.getElementById('root')
);

// react component 
import ReactDOM from 'react-dom';

// 이떄 Hello 라는 함수를 react component 라고 한다. 
// react component 의 특징 : 
// 1. 함수 이름의 첫 글자를 반드시 대문자로 작성해야한다.
// 2. 반드시 JSX 문법으로 만든 react element 를 리턴해야한다. 
function Hello() {
  return <h1> hi react </h1>
}
const element = (
  <>
    <Hello /> 
    <Hello />
    <Hello />
  </>
);

ReactDOM.render(element, document.getElementById('root'));
