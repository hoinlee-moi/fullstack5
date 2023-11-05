const arr = [];
const makeArrayPush = (n) => {
  if (n === 1) return arr.push(n);//1이 더 좋음 -> 이유는 n이라는 메모리를 찾으러 가야하기 때문
  return arr.push(makeArrayPush(n - 1) + 1);
};
makeArrayPush(10);
console.log(arr);

const makeArray = (n) => {
  if (n === 1) return [n];//1이 더 좋음 -> 이유는 n이라는 메모리를 찾으러 가야하기 때문
  return [...makeArray(n - 1), n];
};
console.log(makeArray(10));

const makeArrayTco = (n, acc = []) => {
  if (n === 1) return [n, ...acc];//1이 더 좋음 -> 이유는 n이라는 메모리를 찾으러 가야하기 때문
  return makeArrayTco(n - 1, [n, ...acc]);
};
console.log(makeArrayTco(5));

