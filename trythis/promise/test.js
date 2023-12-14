// const f = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("promise!!!");
//     resolve("ekeke");
//   }, 1000);
// });

// f.then(console.log)
//   .then(console.log("ekeke1"))
//   .then(() => {
//     console.log("ekeke2");
//     return "Finally";
//   })
//   .then((res) => {
//     console.log("ekeke3", res);
//   });

const resolve = (str) => console.log(str)


resolve('str')