// children : 기본적으로 존재하는 prop, component의 자식들을 값으로 갖는 prop

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
