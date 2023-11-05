import { range } from "../utils/array-utils.js";

/* 
3개의 매개변수가 있다면 시작, 끝 , 계산값
2개만 받을 경우 계산값의 기본값은 1이고 시작부터 끝까지 계산
1개만 받을 경우 양수일시 1부터 해당값까지 음수일경우 해당값부터 0전까지(-1)
시작값과 엔드값이 같거나 계산 한 값이 끝값을 넘어갈경우 하나만 나옴
시작값과 끝값, 계산값이 전혀 맞지 앟ㄴ는 경우 빈배열이 출력
*/
/*
  
*/

console.log(range(1, 10, 1)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
console.log(range(5)); // [1, 2, 3, 4, 5]
console.log(range(100)); // [1, 2, 3, 4, 5, …, 99, 100]
console.log(range(-5)); // [-5, -4, -3, -2, -1]
console.log(range(5, 5)); // [5]
console.log(range(5, 5, 0)); // [5]
console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
console.log(range(5, 5, -1)); // [5]
console.log(range(0, -1)); // [0, -1]
console.log(range(5, 1, 1)); // []
console.log(range(0, -3)); // [0, -1, -2, -3]
console.log(range(1, 5, -1)); // []
console.log(range(-3, 0)); // [-3, -2, -1, 0]
console.log(range(1, 5, 6)); // [1]
console.log(range(0)); // [0]
console.log(range(0, 0)); // [0]
console.log(range(0, 0, 5)); // [0]
console.log(range(2, 1, -5)); // [2]
console.log(range(0, -1, -5)); // [0]
// range(-10, -1); //[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
