const f = (n) => {
  if (n < 2) return [0, 1];
  return [...f(n - 1), f(n - 2)[n - 2] + f(n - 1)[n - 1]];
};
//f(3)[3] = > [0,1,1,2]
//f(4) => [0,1,1,2,3] =>1+2 => f(2)[2]+ f(3)[3] => [0,1,1][2] + [0,1,1,2][3]

//f2(3) => fiboArr[3]없으니 fiboArr[3] = f2(1)+f2(2) 1 + 1
//f2(2) => fiboArr[2]없으니 fiboArr[2] = f2(0)+f2(1) 0 + 1
//f2(1) =>1
//f2(0) =>0

const tcoF = (n, acc = []) => {
  if (n < 2) return [0, 1, ...acc];
  return tcoF(n - 1, [tcoF(n - 1)[n - 1] + tcoF(n - 2)[n - 2], ...acc]);
};
// console.log(tcoF(10), "tcoF");

// fibonachi(5)이면 f(5) = [f(0),f(1),f(2),f(3),f(4),f(5)]
// f(5) = f(3) + f(4)
// f(4) = f(2) + f(3) => f(4) = [...f(3),f(2)[2]+f(3)[3]] => [0,1,1,2,1+2] => [0,1,1,2,3]
// f(3) = f(1) + f(2) => f(3) = [f(0),f(1),f(2),f(3)] =>[0,1,1,f(1)+f(2)[2]] =>[0,1,1,1+[0,1,1]] =>[]
// f(2) = f(0) + f(1) => f(2) = [f(0),f(1),f(2)] = [...[0,1],f(0)+f(1)] => [0,1,0+1] => f(2) = [0,1,1]
// f(1) = [0,1]
// f(0) = [0,1]

// console.log(f(5), "noCacheCount", noCache);
// console.log(f(7), "noCacheCount", noCache);
// console.log(f(10), "noCacheCount", noCache);

//메모이 제이션
//각 숫자별 배열을 저장해놓으면 추가로 돌지 않도록 한다
// f(5)이면 f(5) = [f(0),f(1),f(2),f(3),f(4),f(5)]  가 나와야한다
// cache[5] = [...f(4),f(3)[3] + f(4)[4]]
// cahce[4] = [...f(3),f(2)[2] + f(3)[3]]
// cache[3] = [...f(2),f(1)[1] + f(2)[2]]
// cache[2] = [...f(1),f(0)[0] + f(1)[1]]
// cache[1] = [0,1]

// const fiboArr = (n) => {
//   if (n < 2) return [0, 1];
//   return [
//     ...fiboArrMemoization(n - 1),
//     fiboArrMemoization(n - 2)[n - 2] + fiboArrMemoization(n - 1)[n - 1],
//   ];
// };

// const fiboValue = (n) => {
//   if (n < 2) return n;
//   return fiboValueMemoization(n - 2) + fiboValueMemoization(n - 1);
// };

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
const fiboValueMemoization = memoized(function (n) {
  if (n < 2) return n;
  return fiboValueMemoization(n - 2) + fiboValueMemoization(n - 1);
});

// console.log(fiboArrMemoization(5));
// console.log(fiboArrMemoization(10));

// console.log(fiboValueMemoization(5));
// console.log(fiboValueMemoization(10));

const fiboArrFor = () => {
  const memoArr = [0, 1];

  return (k) => {
    if (memoArr.length >= k) return memoArr.slice(0, k + 1);

    for (let i = memoArr.length; i <= k; i++) {
      memoArr[i] = memoArr[i - 2] + memoArr[i - 1];
    }
    return memoArr;
  };
};

const forFiboArr = fiboArrFor();
console.log(forFiboArr(5), "bobobo");

const fiboForTco = (n, acc = []) => {};

/*
0:[0]
1:[0,1]
2:1
3:2
4:3
5:5
*/
