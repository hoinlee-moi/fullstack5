// 'use strict'
// // const y=1
// // console.log(y)

// // function f() {
// //   "use strict";
// //   let z = 0;
// //   console.log(z);
// // }
// // let x = 1
// // {
// //     function f(){
// //         console.log('block-f')
// //     }
// //      x =3
// // }
// // f();
// // let z=9
// // console.log(x,"x")

// let x = 1;

// function aa() {
//     let x = 3
//  console.log(x)
// }
// aa()
const sum1 = function (n) {
  if (n === 1) return 1;
  return n + sum1(n - 1);
};

let tot = 0;
for (let i = 1; i <= 100; i += 1) {
  tot += i;
}
console.log(tot);
const sum = sum1(100);
console.log("sum retrun ", sum);
console.log("Pass?", tot === sum);

function f(n, acc = 0) {
  if (n === 1) return 1 + acc;
  return f(n - 1, n + acc);
}
console.log(f(100));
