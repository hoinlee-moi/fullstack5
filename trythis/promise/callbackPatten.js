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
const promisFnCloser = () => {
  let befroeStr;
  return (printStr, timer) =>
    new Promise((resolve, reject) => {
      if (printStr === befroeStr) reject(new Error("Already 3-depth!!"));
      else
        setTimeout(() => {
          console.log(printStr, new Date());
          resolve();
        }, timer);
      befroeStr = printStr;
    });
};
const promisFn = promisFnCloser();
console.log(promisFn);
promisFn("depth1", 1000)
  .then((res) => promisFn("depth2", 2000))
  .then((res) => promisFn("depth3", 3000))
  .then((res) => promisFn("depth3", 3000))
  .catch((err) => console.log("Error!!>>", err));

console.log("START!", new Date());
