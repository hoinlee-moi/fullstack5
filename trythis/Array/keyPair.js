/*
다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)함수를 작성하시오.
*/
const keyPair = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) {
        return [i, j];
      }
    }
  }
};

console.log("v1>>>>>>>>>>>>>>>>>>>>>>>");
console.time();
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.timeEnd();
console.time();
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.timeEnd();
console.time();
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
console.timeEnd();

//cf. O(n^2) ⇒ O(N) || O(logN)
const keyPairV2 = (arr, targetNum) => {
  while (arr.length !== 1) {
    const num = arr.pop();
    if (arr.find((v) => v === targetNum - num)) {
      return [arr.indexOf(targetNum - num), arr.length];
    }
  }
};
const keyPairV3 = (arr, n) => {
  // {yourValue: pair-idx}
  const yourValueVsPairIdx = {}; // {6:0, 4:1}

  for (let i = 0; i < arr.length; i += 1) {
    const yourValue = arr[i];
    const pairIdx = yourValueVsPairIdx[yourValue];
    if (pairIdx) return [pairIdx, i];
    yourValueVsPairIdx[n - yourValue] = i;
    console.log('🚀  yourValueVsPairIdx:', yourValueVsPairIdx);
  }
};

console.log("v2======>>>>>>");
console.time();
console.log(keyPairV2([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.timeEnd();
console.time();
console.log(keyPairV2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.timeEnd();
console.time();
console.log(keyPairV2([1, 2, 3, 4, 5], 9)); // [3, 4]
console.timeEnd();
