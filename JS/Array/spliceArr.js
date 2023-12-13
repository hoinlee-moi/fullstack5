// splice 함수를 순수 함수로 구현하시오.

const arr = [1, 2, 3, 4, 5];

const spliceV1 = ([...arr], start, end = arr.length, ...argu) => (
  arr.splice(start, end, ...argu), arr
);

const spliceV2 = ([...arr], start, end = arr.length, ...argu) =>
  arr.slice(0, start).concat(argu).concat(arr.slice(start+end));

const a1 = spliceV1(arr, 1, 3); // a1 = [1, 5]
const a2 = spliceV1(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
const a3 = spliceV1(a2, 2); // a3 = [1, 2]
const a4 = spliceV1(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
const a5 = spliceV1(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]

console.log("a1>>>", a1);
console.log("a2>>>", a2);
console.log("a3>>>", a3);
console.log("a4>>>", a4);
console.log("a5>>>", a5);

// const a1 = spliceV2(arr, 1, 3); // a1 = [1, 5]
// const a2 = spliceV2(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
// const a3 = spliceV2(a2, 2); // a3 = [1, 2]
// const a4 = spliceV2(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
// const a5 = spliceV2(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
// console.log("a1>>>", a1);
// console.log("a2>>>", a2);
// console.log("a3>>>", a3);
// console.log("a4>>>", a4);
// console.log("a5>>>", a5);