//다음 코드에서 then 함수가 실수로 Promise 객체를 반환하지 않았을 경우 에러로 처리하도록 수정하시오.

const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id));
  });

promiseFn(1)
  .then((res) => {
    console.log("res1>>", res);
    promiseFn(res); // Need Return the Promise Object!!
  })
  .then((res) => {
    console.log("res2>>", res); // undefined
    if (res === undefined) return Promise.reject(new Error("No valid resolve"));
    // if (res === undefined) throw new Error("No valid resolve");
    return promiseFn(res ?? 3);
  })
  .catch((err) => console.log("Error!!>>", err));
