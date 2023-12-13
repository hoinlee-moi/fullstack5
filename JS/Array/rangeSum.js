// 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (start = 0, end = arr.length - 1) =>
  arr.reduce(
    (acc, cur, idx) => (start <= idx ? (idx <= end ? acc + cur : acc) : 0),
    0
  );

console.log(rangeSum(2, 5)); // 19
console.log(rangeSum(3, 5)); // 15
console.log(rangeSum(1, 4)); // 14
console.log(rangeSum(0, 4)); // 15
console.log(rangeSum(5, 8)); // 30
console.log(rangeSum(6, 8)); // 22
console.log(rangeSum(2, 8)); // 41
console.log(rangeSum(4, 4)); // 5
console.log(rangeSum(5)); // 30
console.log(rangeSum(2)); // 41
console.log(rangeSum()); // 45
