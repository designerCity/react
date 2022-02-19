import { useState } from 'react';
import Button from './Button'
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';
import './App.css'
import Reset from './assets/ic-reset.svg'

const INITIAL_VALUE = 'rock';

// 승패 문자로 결과 내주는 함수  
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}


function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);

  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  // 가위바위보를 냈을 때 문자열 숫자 return 
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand(); // 랜덤하게 상대 가위바위보 내게 
    const nextHistoryItem = getResult(nextHand, nextOtherHand); // 문자열로 결과
    const comparison = compareHand(nextHand, nextOtherHand); // 숫자 1, -1, 0 (승 패 무)

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  // 처음부터 버튼
  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };
  return (
    <div className='App'>
      <h1 className='App-heading'>가위바위보</h1>
      <Button className='App-reset' onClick={handleClearClick}><img className='App-reset' src={ Reset } alt='초기화' /></Button>
      <div className='App-scores'>
        <div className='Score'>
          <div className='Score-num'> {score}</div>
          <div className='Score-name'> 나</div>
        </div>
        <div className='App-versus'> : </div>
        <div className='Score'>
          <div className='Score-num'> {otherScore}</div>
          <div className='Score-name'> 상대</div>
        </div>
      </div>
      
      <div className='Box App-box'>
        <div className='Box-inner'>
          <div className='App-hands'>
            <div className='Hand'> <HandIcon className="Hand Hand-icon" value={hand} /> </div>
            <div className='App-versus'> VS </div>
            <div className='Hand'> <HandIcon className="Hand-icon" value={otherHand} /> </div>
          </div>
        </div>
      </div>

      <div className='App-bet'>
        <span> 배점 </span>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
        <span> 배 </span>
      </div>
      <div className='App-history'>
        <h2>승부기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
