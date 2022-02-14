// component 에서 state 를 사용하기 위해서는 
import { userState } from 'react'


function App() {  
  const [num, setNum] = useState(1); // useState 함수는 파라미터로 초기값을 전달받음
                                     // 이 함수가 실행되면 배열의 형태로 요소 두개를 리턴하게 된다.(state, setter)
                                     // 그래서 destructuring 문법으로 사용해야함.
//         배열의 첫 번째 요소는 state 값이다. : 현재 변수의 값을 나타내는 것이다. 
//         배열의 두 번째 요소는 setter 함수이다. : 이 함수는 호출할 때 파라미터로 전달하는 값으로 state 값이 변경이 되는 것이다.
//                                                 일반적으로 naming 을 state 의 이름 앞에 set 을 붙인 형태로 naming 을 한다.
//         이렇게 state 의 값을 변경할 때 반드시 setter 함수를 통해서 값을 변경해야한다.
  return (
    <>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
        <Dice color="red" num={2} />
    </>    
  )
}

// 최종코드 

import { useState } from 'react'
import Button from './Button';
import Dice from './Dice'

// 랜덤한 수
function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {  
  const [num, setNum] = useState(1);
  const handleRollClick =() => {
    const nextNum = random(6);
    setNum(nextNum);
  }
  // 처음부터 주사위를 리셋하는 것  
  const resetRollClick =() => {
    setNum(1);
  }
  return (
    <>
      <div>
        <Button onClick={ handleRollClick }>던지기</Button>
        <Button onClick={ resetRollClick }>처음부터</Button>
      </div>
        <Dice color="red" num={num} />
    </>    
  )
}

export default App;

