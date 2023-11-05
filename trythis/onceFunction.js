const once = (fn) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    return fn.call(...args);
  };
};

const once2 = (fn) => {
  let done = false;
  return (...args) => {
    if (done) return undefined;
    return (done = true), fn.apply(this, args);
  };
};

const once3 = (fn) => {
  let done = false;
  return (...args) =>
    done ? undefined : ((done = true), fn.call(this, ...args));
};

const fn = once4((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
