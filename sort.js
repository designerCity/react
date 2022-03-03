// sort method == 별점이나 최신순으로 정렬해준다. 
// 배열을 정렬하는 method
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
// 결과에서 알 수 있다싶이 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않는다
// 이때 sort method 에 다음과 같은 callback 함수를 argument 로 작성해주면 된다. 

const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]

// 주의사항
// method 를 실행하는 원본 배열의 요소들을 정렬한다. 
// 따라서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없다. 
// 이런 경우에는 미리 다른 변수에 복사해주면 됨. 
