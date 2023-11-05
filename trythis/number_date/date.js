const rand = (start, end) =>
  start + Math.floor(Math.random() * (end - start + 1));

const day1 = new Date(1970, 0, 2);
const day2 = new Date(1970, 0, 3);
console.log(
  "1970년 1월 1일과 1970년 1월 2일의 차이 ===>>>",
  day2.getTime() - day1.getTime()
);
// console.log(day2.getTime())

const TODAY = new Date();
const TODAYYEAR = TODAY.getFullYear();
const TODAYMONTH = TODAY.getMonth();
const TODAYDATE = TODAY.getDate()

const randomDay = (roop) => {
  const resultArr = [];
  for (let i = 0; i < roop; i += 1) {
    resultArr.push(rand(1, new Date(TODAYYEAR, TODAYMONTH, 0).getDate()));
  }
  return resultArr;
};

console.log(
  "이 달의 날짜 5개를 무작위로 만들어 역순 ===>>>",
  randomDay(5).sort((a, b) => b - a)
);

const nextYearToday = new Date(TODAYYEAR+1,TODAYMONTH,TODAYDATE).toString()
console.log("내년(2024년)의 오늘의 요일===>>>",nextYearToday.slice(0,4))


const hundredPlusDay = new Date(TODAYYEAR,TODAYMONTH,TODAYDATE+100).getDate()
console.log("오늘로 부터 100일 후의 날짜 ===>>>",hundredPlusDay)