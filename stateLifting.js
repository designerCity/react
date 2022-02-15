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
  // 추가기능 던지기
  const handleRollClick =() => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum)
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
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>sum</h2>
        <p>{sum}</p>
        <h2>history</h2>
        <p>{gameHistory.join(', ')}</p> 
      </div>
    </>    
  )
}

export default Board;


// 이렇게 자식 component 의 state 들을 부모 component 로 올려 주는 것을 state lifting 이라고 한다. 



// App.js
import Board from './Board';

function App() {
  
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  return (
    <div>
      <Board name="나" color="blue" />
      <Board name="상대" color="red" />
    </div>
  )
}

export default App;
