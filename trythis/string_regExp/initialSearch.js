import assert from "assert";

const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수","고성ㄱ"];

const HANGULMATCH = {
  ㄱ: "가-깋",
  ㄲ: "까-낗",
  ㄴ: "나-닣",
  ㄷ: "다-딯",
  ㄸ: "따-띻",
  ㄹ: "라-맇",
  ㅁ: "마-밈",
  ㅂ: "바-빟",
  ㅃ: "빠-삫",
  ㅅ: "사-싷",
  ㅆ: "싸-앃",
  ㅇ: "아-잏",
  ㅈ: "자-짛",
  ㅉ: "짜-찧",
  ㅊ: "차-칳",
  ㅌ: "타-팋",
  ㅍ: "파-핗",
  ㅎ: "하-힣",
};

const searchByKoreanInitialSound = (arr, initial) => {
  const initArr = [...initial].map((v) => `[${v}${HANGULMATCH[v]??""}]`);
  const regexp = new RegExp(`${initArr.join("")}`);
  console.log(regexp)
  return arr.filter((str) => str.match(regexp));
};

const initialPrase = (str) => {
  const consonant = ["ㄱ", "ㄲ", "ㄴ"];
  console.log(44032 / 588, 44620 / 588, 45208 / 588, "\n");

  console.log(
    "가".charCodeAt(),
    "까".charCodeAt(),
    "나".charCodeAt(),
    "강".charCodeAt(),
    "ㄱ".charCodeAt(),
    "ㅎ".charCodeAt()
  );
  str.split("").map((string) => {});
};

initialPrase("강원도 고성군");

// assert.strictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), "고성군");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), "토성면");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), "북면");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), undefined);

// searchByKoreanInitialSound(s, "ㄱㅅㄱ"); // 고성군
// searchByKoreanInitialSound(s, 'ㅌㅅㅁ'); // 토성면
// searchByKoreanInitialSound(s, 'ㅂㅁ');  // 북면
// searchByKoreanInitialSound(s, 'ㅍㅁ');  // undefined

assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㄱㅇ'), ['강원도 고성군']);
assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㄱㅅㄱ'), ['강원도 고성군', '고성군 토성면','고성ㄱ']);
assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㅌㅅㅁ'), ['고성군 토성면', '토성면 북면']);
assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㅂㅁ'), ['토성면 북면', '북면']);
assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㅍㅁ'), []);
assert.deepStrictEqual( searchByKoreanInitialSound(s,'ㄱ1ㅅ'), ['김1수']);


// a="ㄱㄲㄴㄷㄹ..."를 쭉 해서 b="가까나다라..." 에서 찾아서 유니코드에서 -1