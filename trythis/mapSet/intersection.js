const assert = require("assert");

//다음과 같은 집합 A, B, C가 있을 때,
//각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.
const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];
const D = [1, 2];
const intersect = (arr1, arr2) => [
  ...new Set(arr1.filter((v) => arr2.includes(v))),
];
const diff = (arr1, arr2) => [
  ...new Set(arr1.filter((v) => !arr2.includes(v))),
];

const union = (arr1, arr2) => [...new Set([...arr1,...arr2])];

assert.deepStrictEqual(intersect(A, B), [1, 3, 5]);
assert.deepStrictEqual(intersect(A, C), [3, 4]);
assert.deepStrictEqual(diff(A, B), [2, 4]);
assert.deepStrictEqual(diff(B, A), [22, 44]);
assert.deepStrictEqual(diff(A, C), [1, 2, 5]);
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5]);
assert.deepStrictEqual(diff(A, D), [3, 4, 5]);
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44]);
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555]);
