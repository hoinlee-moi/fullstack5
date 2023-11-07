// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const now = Date.now();
//       if (now % 2 === 0)
//         resolve(console.log('fulfill', now));
//       else reject(new Error('어디로?'));
//     }, 1000);
//   });
  
  
//   console.log('111>>', p);
//   setTimeout(() => console.log('222>>', p), 2000);

  const callbackFunc = () => {
    setTimeout(()=>{
        const now = Date.now()
        if(now % 2 ===0) return 'resolve'
        else return 'reject'
    },1000)
  }
  
  function myPromise(cb) {
    console.log('myPromise!!!!')
    console.log(cb())

  }
  myPromise(setTimeout(()=>{
    const now = Date.now()
    if(now % 2 ===0) return 'resolve'
    else return 'reject'
},1000))