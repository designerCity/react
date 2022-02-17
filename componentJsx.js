// component : 부품이라는 뜻이다. 
// component 를 사용하면 반복적인 개발을 줄일 수 있다. 
//                       오류를 고치기 쉽다.
//                       일을 쉽게 나눌 수 있다. -> 협업하기 쉬움



// component 규칙
//   반드시 첫 글자를 대문자로 
//   리액트 컴포넌트는 리액트 엘리먼트를 조금 더 자유롭게 다루기 위한 하나의 문법입니다.

//   컴포넌트를 만드는 가장 간단한 방법은 자바스크립트의 함수를 활용하는 건데요. 
//   아래 코드에서 JSX 문법으로 작성된 하나의 요소를 리턴하는 Hello 함수가 바로 하나의 컴포넌트입니다.
//    element 변수 안의 JSX 코드에서 볼 수 있듯 컴포넌트 함수 이름을 통해 하나의 태그처럼 활용할 수가 있습니다.

//   이런 특성을 모듈 문법으로 활용하면 훨씬 더 독립적으로 컴포넌트 특성에 집중해서 코드를 작성할 수가 있습니다.

// element 
// 리액트 엘리먼트를 ReactDOM.render 함수의 아규먼트로 전달하게 되면, 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워주는 것이죠.
// 리액트 엘리먼트는 리액트로 화면을 그려내는데 가장 기본적인 요소입니다.


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



// ----------------------------------------------------------------------------
// App.js file 이라고 가정하고 react element 를 
function App() {
  return <div>App 컴포넌트!</div>;
}

export default App;

// App.js file 에서 현 파일로 불러올때
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));

// ---------------------------------------------------

// Dice 파일을 element 를 리턴하는 component Dice 
import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {
  return <img src={diceBlue01} alt="주사위" />
};
export default Dice
  
// Dice 파일을 import 해서 component 를 리턴하게끔
import Dice from './Dice';

function App() {
  return (
  <div>
    < Dice />
  </div>
  );
}
export default App;

  
  

 
