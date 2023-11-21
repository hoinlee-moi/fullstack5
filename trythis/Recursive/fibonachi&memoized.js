//anothor recursive
const f = (n) => {
  if (n < 2) return [0, 1];
  return [...f(n - 1), f(n - 2)[n - 2] + f(n - 1)[n - 1]];
};
const tcoF = (n, acc = []) => {
  if (n < 2) return [0, 1, ...acc];
  return tcoF(n - 1, [tcoF(n - 1)[n - 1] + tcoF(n - 2)[n - 2], ...acc]);
};

// recursive
const fibonachiRecursive = (n) => {
  if (n < 2) return [0, 1];
  return [
    ...fibonachiRecursive(n - 1),
    fibonachiRecursive(n - 2)[n - 2] + fibonachiRecursive(n - 1)[n - 1],
  ];
};
/*
f(5) = f(3) + f(4) => [0,1,1,2,3,5] = [0,1,1,2] + [0,1,1,2,3] 
=> [...[0,1,1,2,3],[0,1,1,2][3],[0,1,1,2,3][4]] 
=> [0,1,1,2,3, 2 + 3] => [0,1,1,2,3,5]
=> [...f(4),f(3)[3] + f(4)[4]]
*/

// recursive TCO
const fibonachiTCO = (n, acc = []) => {
  if (n < 2) return [0, 1, ...acc];
  return fibonachiTCO(n - 1, [
    fibonachiTCO(n - 1)[n - 1] + fibonachiTCO(n - 2)[n - 2],
    ...acc,
  ]);
};

//memoized
const memoized = (fn) => {
  const momoizedTable = {};
  return function (n) {
    return momoizedTable[n] || (momoizedTable[n] = fn(n));
  };
};

const fiboArrMemoization = memoized(function (n) {
  if (n < 2) return [0, 1];
  return [
    ...fiboArrMemoization(n - 1),
    fiboArrMemoization(n - 2)[n - 2] + fiboArrMemoization(n - 1)[n - 1],
  ];
});

//for loop(closer)
const fobonachiFor = () => {
  const memoizedArr = [0, 1];

  return (k) => {
    if (memoizedArr.length > k) return memoizedArr[k];

    for (let i = memoizedArr.length; i <= k; i++) {
      memoizedArr[i] = memoizedArr[i - 2] + memoizedArr[i - 1];
    }
    return memoizedArr[k];
  };
};

const fibonachi = fobonachiFor();

function neverFullStack(n, limit, fn) {
  const loopCount = Math.floor(n / limit);
  for (let i = 1; i <= loopCount; i++) {
    fn(limit * i);
  }
  return fn(n);
}

function neverFullStackCloserV1(limit, fn) {
  return function (n) {
    if (n > limit) {
      limitCount = Math.floor(n / limit);
      for (let i = 1; i <= limitCount; i++) {
        loopValue = fn(limit * i);
      }
    }
    return fn(n);
  };
}
function neverFullStackCloserV2(limit) {
  const limitCount = {};
  const loopValue = {};

  return function (n, fn) {
    if (n > limit) {
      limitCount[n] = limitCount[n] || Math.floor(n / limit);
      for (let i = 1; i <= limitCount[n]; i++) {
        if (loopValue[limit * i]) continue;
        loopValue[limit * i] = fn(limit * i);
      }
    }
    return fn(n);
  };
}

const thousandLimitFullStack = neverFullStackCloserV1(10, fibonachi);
const hundredLimitFullStack = neverFullStackCloserV1(100, fibonachi);
console.log(hundredLimitFullStack(1000));
console.log(thousandLimitFullStack(400));
console.log(fibonachi(100));
console.log(neverFullStack(100, 5, fibonachi));
