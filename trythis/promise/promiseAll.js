import { assertArray } from "../utils/test-utils.js";
const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// const promiseAll = (arr) => Promise.all(arr);

const promiseAll = (arr) =>
  new Promise((resolve, reject) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      const s = arr[i].then((res) => {
        console.log(res)
        result.push(res)}).catch((err) => reject(err));
      // if (i === arr.length - 1)
      //   arr[i]
      //     .then((res) => (result.push(res), resolve(result)))
      //     .catch((err) => reject(err));
      //     console.log(result,'어레이')
    }
    console.log(result)
    resolve(result)
  });

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assertArray(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
