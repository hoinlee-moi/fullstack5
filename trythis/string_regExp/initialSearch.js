import assert from "assert";

const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

const hangulMatch = {
  ㄱ: "가-깋",
  ㄴ: "나-닣",
  ㄷ: "다-딯",
  ㄹ: "라-맇",
  ㅁ: "마-밈",
  ㅂ: "바-빟",
  ㅅ: "사-싷",
  ㅇ: "아-잏",
  ㅈ: "자-짛",
  ㅊ: "차-칳",
  ㅌ: "타-팋",
  ㅍ: "파-핗",
  ㅎ: "하-힣",
};

const searchByKoreanInitialSound = (arr, initial) => {
  const initArr = initial.split("").map((v) => `[${v}${hangulMatch[v]}]`);
  const regexp = new RegExp(`${initArr.join("")}`, "g");
  return arr.find((str) => str.match(regexp))?.match(regexp)[0];
};

assert.strictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), "고성군");
assert.strictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), "토성면");
assert.strictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), "북면");
assert.strictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), undefined);

// searchByKoreanInitialSound(s, "ㄱㅅㄱ"); // 고성군
// searchByKoreanInitialSound(s, 'ㅌㅅㅁ'); // 토성면
// searchByKoreanInitialSound(s, 'ㅂㅁ');  // 북면
// searchByKoreanInitialSound(s, 'ㅍㅁ');  // undefined
