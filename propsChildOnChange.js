//  Props : 리액트에서 이렇게 컴포넌트에 지정한 속성들을 가리킴.
//          react 에서 컴포넌트에 데이터를 전달해주기 위해서 props 를 활용한다.
// 컴포넌트에 속성을 지정해주면 각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달된다.

// JSX 문법으로 컴포넌트를 작성할 때 어떤 정보를 전달할 때는 일반적인 props의 속성값을 주로 활용




// children : 기본적으로 존재하는 prop, component의 자식들을 값으로 갖는 prop
// children을 활용하면 단순히 텍스트만 작성하는 걸 넘어서 컴포넌트 안에 컴포넌트를 작성할 수도 있고, 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있다.

// Button.js file 
function Button ({ children }) {
  return <button>{children}</button>;
}
export default Button:

// Button.js 의 component 를 Dice.js 에 불러오는 방법
// Button component 를 여는 태그와 닫는 태그를 활용하여 작성하면 되는데, 그 안에는 필요한 값을 작성하면 됨.
import Button from './Button';

function App() {
  
  return (
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
    </div>
  );
}

export default App;


// onChange : input 태그의 onChange prop
//            react 에서의 onChange prop : 입력값이 변경될 때마다 이벤트를 받으려면 onChange 이벤트 핸들러 함수로 처리
//    VS 
// JS 의 oninput : 입력값이 변경될 때마다 이벤트를 받으려면 oninput 이벤트 핸들러 함수로 처리
// bet 의 값
<input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input> // 이런식으로 표현
