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

