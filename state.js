// component 에서 state 를 사용하기 위해서는 
import { userState } from 'react'

function App() {  
  const [num, setNum] = useState(1); // useState 함수는 파라미터로 초기값을 전달받음
                                     // 이 함수가 실행되면 배열의 형태로 요소 두개를 리턴하게 된다.(state -num , setter - setNum )
                                     // 그래서 destructuring 문법으로 사용해야함.
                                     // 배열의 첫 번째 요소는 state 값이다. : 현재 변수의 값을 나타내는 것이다. 
                                     // 배열의 두 번째 요소는 setter 함수이다. : 이 함수는 호출할 때 파라미터로 전달하는 값으로 state 값이 변경이 되는 것이다.
                                     // 일반적으로 naming 을 state 의 이름 앞에 set 을 붙인 형태로 naming 을 한다.
                                     // 이렇게 state 의 값을 변경할 때 반드시 setter 함수를 통해서 값을 변경해야한다.
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

// 참조형 state 를 다룰 때 주의사항

import { useState } from 'react'
import Button from './Button';
import Dice from './Dice'

function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {  
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  
  // 추가기능
  const handleRollClick =() => {
    const nextNum = random(6);
    setNum(nextNum);              // 이 두줄을 주석 처리하면 
    setSum(sum + nextNum)         // gameHistory state 값도 변하지 않는데 그 이유는 배열은 참조형이기 때문이다. 주소값이 바뀌지 않기 때문에 state 가 변경되었다고 판단하지 않는다. 
                                  // 그래서 배열 객체 같은 참조형type 의 state 를 변경할 때에는 아예 전체를 새로 만든다고 생각하는게 좋음. spread 구문을 활용하는 것이 좋음.
    setGameHistory([...gameHistory, nextNum]);
  }
  // 초기화
  const resetRollClick =() => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <>
      <div>
        <Button onClick={ handleRollClick }>던지기</Button>
        <Button onClick={ resetRollClick }>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>sum</h2>
        <p>{sum}</p>
        <h2>history</h2>
        <p>{gameHistory.join(', ')}</p> 
      </div>
    </>    
  )
}
// join method 는 argument 전달한 이 값을 배열의 각 요소 사이사이에 넣어서 결과적으로 하나의 문자열을 만들어 주는 method 이다.
export default App;
