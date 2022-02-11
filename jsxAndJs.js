// JSX 파일은 실제로 실행될 때 JS 코드로 변환되어서 실행이된다.
// JSX 문법에서 JS 코드를 활용하기 위해서는 중괄호로 감싸주면 된다.
//                                  중괄호 안에는 자바스크립트로 된 표현식(문장인 if문 for문 함수 선언 등은 사용불가)은 모두 사용할 수 있다. 
import ReactDOM from 'react-dom';
const product = 'macbook';
const model = 'Air';

ReactDOM.render(
  <h1> 나만의 { product.toUpperCase() + model } 주문하기</h1>, // toUpperCase 는 대문자로 바꿔주는 method 이기에 MACBOOK 으로 return 된다.
  document.getElementById('root')
);


// 하지만 가독성을 위해 
import ReactDOM from 'react-dom';
const product = 'macbook';
const model = 'Air';
const item = product + model;
const imgUrl = 'https://www.apple.com/kr/xc/product/MYD82?cid=aos-kr-seo-pla'
ReactDOM.render(
  <>
    <h1> 나만의 { item } 주문하기</h1>
    <img src={imgUrl} alt='제품사진'>  // src='url'도 JSX 문법에서는 {} 로 감싸줘야 한다. // html alt 속성은 제품사진을 보여줄 수 없을 때 출력될 것.
  </>,
  document.getElementById('root')
);
// 이렇게 표현하는 것이 좋다. 


// 사용가능한 문법 {} 안에 함수이름과 같은 표현식은 이런 식으로 사용가능하다. 
import ReactDOM from 'react-dom';

const imgUrl = 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_KR?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1632948895000'

function handleClick() {
  alert('곧 도착합니다잉!');
}

ReactDOM.render(
  <>
    <img src={imgUrl} alt='제품사진'/>
    <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);
