// import { randTime } from "./randTimePromise.js";

const randTime = (val) =>
  new Promise((resolve, reject) => {
    const randT = Math.random() * 1000;
    console.log("randTime>>>", val, randT);
    setTimeout(resolve, randT, val);
  });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 >= 0) resolve(now);
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
  .then((res) => {
    console.log("res!!!!!!", res);
    return randTime(2);
  })
  .then((res) => {
    console.log("p.then.res22>>>", res);
    return "FiNALLY";
  })
  .then(console.log("p.then.res33!!!"))
  .then((res) => res || "TTT")
  .then(console.log)
  .catch((err) => {
    console.error("err-11>>", err);
    throw new Error("error2 실행됨??!");
  })
  .catch((err) => console.error("err-22>>", err))
  .finally(() => console.log("finally-11"))
  .finally(() => console.log("finally-22"));

function Promise(cb) {
  this.state = "Pending";
  const thenFn = [];
  const finalFn = [];
  const catchFn = [];
  Promise.prototype.then = (onFullfill) => {
    if (typeof onFullfill === "function") thenFn.push(onFullfill);
    return this;
  };
  Promise.prototype.catch = (onReject) => {
    if (typeof onReject === "function") catchFn.push(onReject);
    return this;
  };
  Promise.prototype.resolve = (res) => {
    resolveRecur(res);
  };
  const resolveRecur = (prevResult) => {
    const fn = thenFn.shift();
    if (!fn) {
      this.state = "fulfill";
      return final();
    }

    if (prevResult instanceof Promise) {
      prevResult.then(fn).then(resolveRecur).catch(this.reject);
    } else {
      try {
        const ret = fn(prevResult);
        resolveRecur(ret);
      } catch (error) {
        this.reject(error);
      }
    }
  };
  Promise.prototype.reject = (err) => {
    this.state = "reject";
    const fn = catchFn.shift();
    if (!fn) {
      final();
      throw err;
    }

    try {
      fn(err);
      final();
    } catch (error) {
      this.reject(error);
    }
  };
  Promise.prototype.finally = (...callback) => {
    finalFn.push(...callback);
    return this;
  };
  const final = () => {
    for (const fn of finalFn) fn();
  };

  cb(this.resolve, this.reject);
}

/*
처음 실행시 pending상태로 바뀌고 cb을 실행시킨다
콜백을 실행시킬 시 setTimeout으로 비동기 실행이 돼서 아래 코드가 실행된다
resolve나 reject가 실행될 때 다시 Promise를 실행하게 하고 클로저를 사용해서 저장된 값을 확인하고
이때 pending 상태면 
*/

// Object.defineProperties(this, {
//   thenFn: {
//     enumerable: false,
//     writable: true,
//   },
//   catchFn: {
//     enumerable: false,
//     writable: true,
//   },
//   finallyFn: {
//     enumerable: false,
//     writable: true,
//   },
// });
