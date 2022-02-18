// JS 파일에서 CSS 파일을 import 하는 방법 

// 요소 내부적으로 스타일링을 할 때는 요소에 관한 Button.css 를 사용하는 것이 좋고,
// 앱 component 의 관점에서 자식 요소들의 여백을 조절할 때는 App.css 를 만들어서 관리하는 것이 좋다.

// index.css file 을 생성하고
// index.js file 에서 
import './index.css';

// elements 의 head 태그 안에 css style 태그가 추가로 작성이 된다. 
// Button.css
.Button {
  padding: 14px 27px;
  outline: none;
  cursor: pointer;
  border-radius: 9999px;
  font-size: 17px;
}

.Button.blue {
  border: solid 1px #7090ff;
  color: #7090ff;
  background-color: rgba(0, 89, 255, 0.2)
}

.Button.red {
  border: solid 1px #ff4664;
  color: #ff4664;
  background-color: rgba(255, 78, 78, 0.2);
}
// 각 class의 중괄호 뒤에 ; 를 쓰지 않아야 적용이 된다. 

// Button.js
import './Button.css'

function Button({ children, onClick, color = 'blue' }) {  // 아무것도 쓰지 않았을 때의 기본깂을 'blue'로 지정 
  const classNames = `Button ${color}`; // 빈 공백이 필요하다 / 이유 : 두 개의 class 가 필요하기 때문이다.
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// App.css
.App .App-button {
  margin: 6px;
}

// App.js 
import { useState } from 'react'
import Board from './Board';
import Button from './Button';
import './App.css'

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // 나의 state 
  const [myHistory, setMyHistory] = useState([]);
  // 상대의 state
  const [otherHistory, setOtherHistory] = useState([]);

  // 추가기능 던지기
  const handleRollClick =() => {
    // 나의 state를 변경하는 부분 
    const nextMyNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    
    // 상대의 state 를 변경하는 부분 
    const nextOtherNum = random(6);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }
  // 초기화
  const resetRollClick =() => {
    // 나
    setMyHistory([]);
    // 상대 
    setOtherHistory([]);
  }

  return (
    <div className='App'>
      <div>
        <Button className='App-button' color="blue" onClick={ handleRollClick }>던지기</Button>
        <Button className='App-button' color="red" onClick={ resetRollClick }>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue"  gameHistory={myHistory} />
        <Board name="상대" color="red"  gameHistory={otherHistory} />
      </div>
    </div>  
  )
}

export default App;


