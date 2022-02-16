// state lifting : 자식 component 의 state 들을 부모 component 로 올려 주는 것을 state lifting 이라고 한다. 


// Board.js 파일을 
import { useState } from 'react'
import Button from './Button';
import Dice from './Dice'

function random(n) {
  return Math.ceil(Math.random() * n);
}
function Board({ name, color}) {  
//   const [num, setNum] = useState(1);
//   const [sum, setSum] = useState(0);
//   const [gameHistory, setGameHistory] = useState([]); 이렇게 자식 component 의 state 들을 부모 component 로 올려 주는 것을 state lifting 이라고 한다. 
//   // 추가기능 던지기
//   const handleRollClick =() => {
//     const nextNum = random(6);
//     setNum(nextNum);
//     setSum(sum + nextNum)
//     setGameHistory([...gameHistory, nextNum]);
//   }
//   // 초기화
//   const resetRollClick =() => {
//     setNum(1);
//     setSum(0);
//     setGameHistory([]);
//   }

  return (    
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>sum</h2>
      <p>{sum}</p>
      <h2>history</h2>
      <p>{gameHistory.join(', ')}</p> 
    </div>       
  )
}

export default Board;


// 이렇게 자식 component 의 state 들을 부모 component 로 올려 주는 것을 state lifting 이라고 한다. 



// App.js
import { useState } from 'react'
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  
  // 나의 state 
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  
  // 상대의 state
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  // 추가기능 던지기
  const handleRollClick =() => {
    // 나의 state를 변경하는 부분 
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum)
    setGameHistory([...gameHistory, nextNum]);
    // 상대의 state 를 변경하는 부분 
    const nextOtherNum = random(6);
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum)
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  }
  // 초기화
  const resetRollClick =() => {
    // 나
    setNum(1);
    setSum(0);
    setGameHistory([]);
    // 상대 
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }


  return (
    <div>
      <div>
        <Button onClick={ handleRollClick }>던지기</Button>
        <Button onClick={ resetRollClick }>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>  
  )
}

export default App;
