const today = new Date();
const dayIdx = today.getDay();
printGetDay1(dayIdx)
printGetDay2(dayIdx)
printGetDay3(dayIdx)

// 스트링 사용하기

function printGetDay1(day) {
  const dayArr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  console.log(`오늘은 ${dayArr[day]}입니다`);
}

function printGetDay2(day) {
  const dayObj = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
  };
  console.log(`오늘은 ${dayObj[day]}입니다`);
}

function printGetDay3(day) {
  switch (day) {
    case 0:
      console.log(`오늘은 일요일입니다`);
      break;
    case 1:
      console.log(`오늘은 월요일입니다`);
      break;
    case 2:
      console.log(`오늘은 화요일입니다`);
      break;
    case 3:
      console.log(`오늘은 수요일입니다`);
      break;
    case 4:
      console.log(`오늘은 목요일입니다`);
      break;
    case 5:
      console.log(`오늘은 금요일입니다`);
      break;
    case 6:
      console.log(`오늘은 토요일입니다`);
      break;
    default:
      break;
  }
}
