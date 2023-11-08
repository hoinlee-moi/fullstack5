// const myFetch = () =>
//   new Promise((resolve, reject) =>
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(res => res.json())
//       .then(resolve)
//       .catch(reject)
//   );

const myFetch = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));

console.log(myFetch());
