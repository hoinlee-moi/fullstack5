import assert from 'assert'

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// const promiseAll = (arr) => Promise.all(arr);

const promiseAll = (arr) =>
  new Promise((resolve, reject) => {
    const result = [];
    let count = arr.length;
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].then((res) => {
        result[i]=res;
        count -=1;
        if(count === 0) resolve(result)
      }).catch((err) => reject(err));

    }
    // resolve(result);
  });

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr,vals)
    // assertArray(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
