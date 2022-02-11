// index.js 파일이라고 가정

import ReactDOM from 'react-dom';

ReactDOM.render(<h1 id="hello">Hi React!<h1>, document.getElementById('root'));
// JSX
// html 과 js 문법을 섞어쓸 수 있는 JS의 확장된 문법
// 일반적인 태그처럼, id를 부여할 수도 있지만, class 나 for 같은 지원하지 않는 html 문법 또한 있다.

// // 그 이유는 JS 에서 class 는 객체지향개념으로 선언 시에 class 라는 키워드를 사용하기 떄문
// class Dice {
//   roll() {
//     console.log('Roll!');
//   }
// } 이런 식으로 말이다. 

// html 에서 class 라는 속성을 사용하려면 className 라는 속성을 작성해야한다. 
ReactDOM.render(<h1 className="hello">Hi React!<h1>, document.getElementById('root'));

// for 라는 속성, html 태그는 label 태그에서 input 태그와 함께 사용이 되는데, 이 또한 사용이 불가하다. 
// 그래서 JSX 문법으로 html for 라는 속성을 사용하려면, htmlFor 라고 작성해야함. 

ReactDOM.render(
  <form>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""/> // html 에서 소문자로 작성하였던 이벤트 핸들러들은 camelCase를 사용해야함 
  </form>,
  document.getElementById('root')
)


// JSX 문법으로 html 문법을 작성할 때에는 반드시 하나로 감싸진 태그로 작성을 해야함 
// div 나 다른 태그로 묶고 싶지 않을 때
// Fragment 사용 

// 방법 1
import { Fragment } from 'react';
ReactDOM.render(
  <Fragment>
    <p className="hello">안녕 리엑트</p>
    <label htmlFor="name">이름 </label>
    <input id="name" type="text"/>
  </Fragment>,
  document.getElementById('root')
);
// 이렇게 사용하면됨 ==> 불필요한 div 태그를 줄일 수 있다. 
// 방법 2
ReactDOM.render(
  <>
    <p className="hello">안녕 리엑트</p>
    <label htmlFor="name">이름 </label>
    <input id="name" type="text"/>
  </>,
  document.getElementById('root')
);
// import 로 불러오지 않고, 축약형 문법으로 이름없는 태그로 사용하는 Fragment 사용 방법이 있다.



// JSX 문법 정리
//
// html 에서 class 라는 속성을 사용하려면 className 라는 속성을 작성해야한다. 
// JSX 문법으로 html for 라는 속성을 사용하려면, htmlFor 라고 작성해야함.
// html 에서 소문자로 작성하였던 이벤트 핸들러들은 camelCase를 사용해야함 
// JSX 문법으로 html 문법을 작성할 때에는 반드시 하나로 감싸진 태그로 작성을 해야함 or Fragment 사용으로 불필요한 div 태그를 줄일 수 있다.
