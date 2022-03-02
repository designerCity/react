mook : 영어로 흉내내다.
mook data : network 로 부터 받아올 data 를 흉내내는 것

map 배열 method 사용하기 

// prop 으로 items 라는 배열을 받는 ReviewList component
function ReviewList({ items }) {
  return <ul>{ items.map((item) => {
    
  })}</ul>
}
// 이렇게 map method 에서 jsx 를 리턴하면, 마치 jsx 를 여러 개 추가한 것처럼 동작한다. 
export default ReviewList;
