/*
다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
 → 배열의 각 요소를 제곱   n => n ** 2
 → 배열 각 요소의 제곱근   n => Math.sqrt(n)
 → 배열의 각 요소를 세제곱  n => n ** 3
 */
const arr = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

//cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);

// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

const newArr = arr.map((val) =>
  [square, sqrt, cube].reduce((acc, cur) => cur(acc),val)
);
console.log(newArr)
