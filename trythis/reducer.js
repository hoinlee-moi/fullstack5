const reduce = (arr, fn, initValue) => {
  let accumulate = initValue ?? arr[0];
  let idx = initValue === undefined ? 1 : 0;
  for (; idx < arr.length; idx += 1)
    accumulate = fn(accumulate, arr[idx]);
  return accumulate;
};
console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));
// 6이면 통과!
//cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
// 15면 통과
// 120이면 통과!
// 8이면 통과!
// 0이면 통과!



