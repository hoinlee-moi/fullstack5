// setTimeout( function() {
//   console.log('depth1', new Date());
//   setTimeout( function() {
//     console.log('depth2', new Date());
//     setTimeout( function() {
//       console.log('depth3', new Date());
//       throw new Error('Already 3-depth!!');
//     }, 3000 );
//   }, 2000);
// }, 1000);

/*
const promisFn = (() => {
  let befroeStr=[];
  return (printStr, timer) =>
    new Promise((resolve, reject) => {
      if (befroeStr.includes(printStr)) reject(new Error("Already 3-depth!!"));
      else
        setTimeout(() => {
          console.log(printStr, new Date());
          resolve();
        }, timer);
      befroeStr.push(printStr)
    });
})();

promisFn("depth1", 1000)
  .then((res) => promisFn("depth2", 2000))
  .then((res) => promisFn("depth3", 3000))
  .then((res) => promisFn("depth3", 3000))
  .catch((err) => console.log("Error!!>>", err));
  

console.log("START!", new Date());
*/

const promisFn = (() => {
  let befroeDepth = [];
  return (depth) =>
    new Promise((resolve, reject) => {
      if (befroeDepth.includes(depth))
        reject(new Error(`Already ${depth}-depth!!`));
      else
        setTimeout(() => {
          console.log(`depth${depth}`, new Date());
          resolve(depth + 1);
        }, 1000 * depth);
        befroeDepth.push(depth);
    });
})();

promisFn(1)
  .then(promisFn)
  .then(promisFn)
  .then(()=>promisFn(3))
  .catch((err) => console.error("Error!!>>", err));

console.log("START!", new Date());
