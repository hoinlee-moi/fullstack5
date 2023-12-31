const arr = [1, 2, 3, 4];

const push = (arr, ...argu) => [...arr, ...argu];

const pop = (arr, count) =>
  count === undefined ? arr[arr.length - 1] : arr.slice(count);

const unshift = (arr, ...argu) => [...argu, ...arr];

const shift = (arr, count = 1) => arr.slice(count);

console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // 4
console.log(pop(arr, 2)); // 2개 팝! ⇒ [3, 4]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]
