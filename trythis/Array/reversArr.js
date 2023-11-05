//1)순수 함수
const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = ([...arr]) => arr.reverse();

const makeReverseArrayV2 = (arr) =>
  arr.map((val, idx) => arr[arr.length - 1 - idx]);

console.log(makeReverseArray(a11)); // [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
console.log(makeReverseArrayV2(a11)); // [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
console.log(a11);

//2) 비순수 함수
const a22 = [1, 2, 3, 4, 5];

const reverseArray = (arr) => arr.reverse();

const reverseArrayV2 = (arr) => {
  [...arr].map((val, idx, array) => {
    arr[idx] = array[arr.length - 1 - idx];
  });
  return arr;
};

console.log(reverseArray(a22)); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!
console.log(reverseArrayV2(a22)); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!
console.log(a22);
