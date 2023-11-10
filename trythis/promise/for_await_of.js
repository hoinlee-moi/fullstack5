//다음 코드를 병렬로 실행하여 3.x초에 수행되도록 promiseAll 함수를 재작성(refactoring)하시오.

const afterTime = (sec) => {
  console.log("afterTime>>", sec);
  if (sec < 1 || sec > 3)
    return Promise.reject(new Error("Not valid sec range!!"));
  return new Promise((resolve) => setTimeout(resolve, sec * 1000, `${sec}초`));
};

// let idx = 0;
// for (const fao of promises) {
//   results.push(await fao((idx += 1)));
// }

const promiseAll = async (promises) => {
  const results = [];
    const arr = promises.map((v, i) => v(i + 1));
    for await (const promi of arr) {
      results.push(promi);
    }
//   for await (const fao of promises) {
//     results.push(fao);
//   }
  return results;
};
// const promiseAll = async promises => {
//     const results = [];
//     for (let i = 0; i < promises.length; i += 1) {
//       results[i] = await promises[i](i + 1);
//     }
//     return results;
//   };

console.time("async-promiseAll");
const pfns = [afterTime, afterTime, afterTime];
const rets = await promiseAll(pfns);
console.log("rets>>>", rets);
console.timeEnd("async-promiseAll");
