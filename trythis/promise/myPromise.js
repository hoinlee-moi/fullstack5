// import { randTime } from "./randTimePromise.js";

const randTime = (val) =>
  new Promise((resolve) => {
    const randT = Math.random() * 1000;
    console.log("randTime>>>", val, randT);
    setTimeout(resolve, randT, val);
  });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 >= 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

// console.log("111>>", p);
// setTimeout(() => console.log("222>>", p), 2000);
// setTimeout(() => console.log("3>>", p), 4000);

p.then((res) => {
  console.log("p.then.res11>>>", res);
  return randTime(1);
})
  .then((res) => randTime(2))
  .then((res) => {
    console.log("p.then.res22>>>", res);
    return "FiNALLY";
  })
  .then(console.log("p.then.res33!!!"))
  .then((res) => res || "TTT")
  .catch((err) => console.error("err-11>>", err))
  .catch((err) => console.error("err-22>>", err))
  .finally(() => console.log("finally-11"))
  .finally(() => console.log("finally-22"));

function Promise(cb) {
  this.state = "Pending";
  let thenFn = [];
  let catchFn;
  let finallyFn = [];
  Promise.prototype.then = (onFullfill) => {
    thenFn.push(onFullfill);
    return this;
  };
  Promise.prototype.catch = (onReject) => {
    if (!catchFn) catchFn = onReject;
    return this;
  };
  Promise.prototype.resolve = (res) => {
    this.state = "resolve";
    const fn = thenFn.shift();
    if (fn) fn(res);
  };
  Promise.prototype.reject = (err) => {
    this.state = "reject";
    catchFn(err);
  };
  Promise.prototype.finally = (callback) => {
    if (cb !== undefined && thenFn.length === 0 && catchFn.length === 0)
      callback();
    this.state = "setteled";
    return this;
  };

  cb(this.resolve, this.reject);
}

/*
처음 실행시 pending상태로 바뀌고 cb을 실행시킨다
콜백을 실행시킬 시 setTimeout으로 비동기 실행이 돼서 아래 코드가 실행된다
resolve나 reject가 실행될 때 다시 Promise를 실행하게 하고 클로저를 사용해서 저장된 값을 확인하고
이때 pending 상태면 
*/
