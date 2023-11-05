const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const getNextWeek = (() => {
  let widx = -1;
  return () => {
    if (widx >= weeks.length-1) widx = -1;
    return `${weeks[(widx += 1)]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 100);

// const intlCloser = () => {
//   let cnt = 0;
//   return () => {
//     setInterval(() => {
//       console.log("call", cnt, getNextWeek());
//       if ((cnt += 1) === 8) clearInterval();
//     }, 500);
//   };
// };
// const intl = intlCloser()
// intl()

// const weeks = ["일", "월", "화", "수", "목", "금", "토"];
// const getNextWeek = () => {
//   let day = -1;
//   return () => `${weeks[(day += 1) % weeks.length]}요일`;
// };

// let cnt = 0;
// const intl = setInterval(() => {
//   console.log("call", cnt, getNextWeek());
//   if ((cnt += 1) === 8) clearInterval(intl);
// }, 100);
