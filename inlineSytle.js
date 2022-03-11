// react 의 inline style 을 html 의 문자열과는 다르게 객체로 스타일 속성값을 지정해줘야 한다. 

const style = {
  속성: '값',
  background-color: 'pink', // CSS 에서의 - 기호가 들어간 속성들은 - 기호 없이 CamelCase 로 적어줘야한다. 
}

function Button({ children, onClick }) {
  return (
//  <button style={{backgroundColor: 'red'}} onClick={onClick}>  // 이렇게 속성값으로도 적을 수 있다. 중괄호가 두 개인 것 유의 
                                                                 // 이렇게 적으면 속성 부분의 코드가 복잡해지고, + 가독성이 낮아짐. 
    <button style={style} onClick={onClick}> // 객체를 사용해서 스타일 속성값을 적어준 모습이다.
      {children}
    </button>
  );
}


export default Button;

// url 속성을 불러올 때
import backgroundImg from './assets/purple.svg';

const style = {
  backgroundImage: `url('${backgroundImg}')`, // 이와 같이 템플릿 리터럴을 활용하여 작성하자 
};
