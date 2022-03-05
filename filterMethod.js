// filter : 각 요소마다 callback 함수를 실행해서 return 값이 true 인 값만 걸러내는 method 


// ReviewList.js (ReviewList component )
import './ReviewList.css'
function formatDate(value) { 
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
}
// ReviewListItem 은 item prop 과 onDelete prop 을 받는데, 
// ReviewListItem 은 각 영화의 div 를 만든다. 
function ReviewListItem({ item, onDelete }) {
  // handleDeleteClcik 함수는 item 의 id 를 삭제한다.
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}> 삭제 </button>
      </div>
    </div>
  );
}

// prop 으로 items 라는 배열을 받는 ReviewList component
// 각 영화의 리스트를 짠 RiviewListItem 을 배열로 다루어서 이 div 의 배열은 만드는 component 이다.
function ReviewList({ items, onDelete }) {

// 이 component 의 onDelete 를 설정해주어야 App component 에서 handleDelete 함수가 실행되게끔 해준다. 
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} onDelete={onDelete}/>
          </li>
        );
    })}
  </ul>
  )
}
export default ReviewList;



// App.js(App component)
import ReviewList from './ReviewList';
import mockItems from '../mock.json';
import { useState } from 'react';
import './App.css'


// 별점이 높은 순으로 정렬하는 것
function App() {
  // mockItems를 여러 부분으로 사용할 수 있게끔 미리 clone 을 만들어둔다. 
  const [items, setItems] = useState(mockItems);

  // 정렬 기준을 선택할 수 있게끔 state 를 활용하는 방법.
  const [order, setOrder] = useState('createAt')
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  
  // button 태그를 통해 최신순이나 별점순을 선택할 수 있게끔 하는 것. // 표현에 주의하자 // 즉시실행함수로 표현해야함.
  const handleNewestClick = () => setOrder('createdAt')
  const handleBestClick = () => setOrder('rating')
  
  // ReviewList component 에서 handleDeleteClcik 함수는 item 의 id 를 삭제하면, 
  // 그 div 의 id 가 사라진거지, 모든 것이 사라진 것이 아닌데, 원래의 items 의 각 id 와 삭제된 id 가 같지 않으면,
  // filter method 를 통해서 true 인 값만은 callback 하는 함수 를 통해서 삭제한 state 를 nextItems 에 저장하여, browser 에 보여준다. 
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems)
  }
  
  return (
    <div>
      <div>
        <button className='btn' onClick={handleNewestClick}>최신순</button>
        <button className='btn' onClick={handleBestClick}>별점순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

// 배열 method 에는 반드시 key prop 을 가져야한다. 
// map method 에서 render 한 child 는 고유한 key prop 을 가져야한다. 
// 이떄 해당하는 최상위 태그에 key 를 설정해주면 된다. 대부분 json data 의 id 를 사용해주는 게 좋다
// 배열의 index 를 key 로 사용하면 안되는 이유는 그때그때 배열의 순서에 따라서 바뀌기 때문이다.
// 즉, DATA 에 부여된 고유한 값이 아니기 때문이다. 
