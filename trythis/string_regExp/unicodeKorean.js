import assert from "assert";

//한글 '이/가, 을/를, 은/는'

//문자열이 한글 자음으로 끝나는지 체크하는 isEndJaum(str)을 작성하시오.
//영어 B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T,U, V,W, X,Y, Z
// 숫자 0, 1,3,6,7,8,9,10

const isEndKorJaum = (uniNum) => {
  const korConsonantFirst = "ㄱ".charCodeAt();
  const korConsonantLast = "ㅎ".charCodeAt();
  if (uniNum >= korConsonantFirst && uniNum <= korConsonantLast) return true;

  const gaUni = "가".charCodeAt();
  const giUni = "개".charCodeAt();
  const hihUni = "힣".charCodeAt();
  if (
    uniNum >= gaUni &&
    hihUni >= uniNum &&
    uniNum % (giUni - gaUni) !== gaUni % (giUni - gaUni)
  )
    return true;
  return false;
};

const isEndEngJaum = (uniNum) => {
  const gatherArr = ["L", "l", "M", "m", "N", "n", "R", "r"];
  return !!gatherArr.find((gater) => gater.charCodeAt() === uniNum);
};

const isEndNumJaum = (number) => {
  const numberGater = [0, 1, 3, 6, 7, 8, 9];
  return !!numberGater.find((gaterNum) => gaterNum === number);
};

const isEndJaum = (str) => {
  const lastWord = str.at(-1);
  const lastWordUni = lastWord.charCodeAt();
  if (!isNaN(Number(lastWord))) return isEndNumJaum(Number(lastWord));
  if (lastWordUni >= "A".charCodeAt() && lastWordUni <= "z".charCodeAt())
    return isEndEngJaum(lastWordUni);
  return isEndKorJaum(lastWordUni);
};

assert.deepEqual(isEndJaum("강원도"), false);
assert.deepEqual(isEndJaum("바라당"), true);
assert.deepEqual(isEndJaum("ㅜㅜ"), false);
assert.deepEqual(isEndJaum("케잌"), true);
assert.deepEqual(isEndJaum("점수 A"), false);
assert.deepEqual(isEndJaum("알파벳L"), true);
assert.deepEqual(isEndJaum("24"), false);
assert.deepEqual(isEndJaum("23"), true);
assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
assert.equal(isEndJaum("ㅜㅜ"), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
assert.equal(isEndJaum("24"), false);
assert.equal(isEndJaum("23"), true);

//조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.

const iga = (str) => {
  const lastWordUni = str.at(-1).charCodeAt();
  if (isEndKorJaum(lastWordUni)) return "이";
  return "가";
};

const eunun = (str) => {
  const lastWordUni = str.at(-1).charCodeAt();
  if (isEndKorJaum(lastWordUni)) return "은";
  return "는";
};
const eulul = (str) => {
  const lastWordUni = str.at(-1).charCodeAt();
  if (isEndKorJaum(lastWordUni)) return "을";
  return "를";
};
const ieoyayeoya = (str) => {
  const lastWordUni = str.at(-1).charCodeAt();
  if (isEndKorJaum(lastWordUni)) return "이어야";
  return "여야";
};
const ilanglang = (str) => {
  const lastWordUni = str.at(-1).charCodeAt();
  if (isEndKorJaum(lastWordUni)) return "이랑";
  return "랑";
};
assert.deepEqual(`고성군${iga("고성군")}`, "고성군이");
assert.deepEqual(`고성군${eunun("고성군")}`, "고성군은");
assert.deepEqual(`고성군${eulul("고성군")}`, "고성군을");
assert.deepEqual(`강원도${iga("강원도")}`, "강원도가");
assert.deepEqual(`강원도${eunun("강원도")}`, "강원도는");
assert.deepEqual(`강원도${eulul("강원도")}`, "강원도를");
assert.deepEqual(`바라던 것${ieoyayeoya("바라던 것")}`, "바라던 것이어야");
assert.deepEqual(`바라던 거${ieoyayeoya("바라던 거")}`, "바라던 거여야");
assert.deepEqual(`해남군${ilanglang("해남군")}`, "해남군이랑");
assert.deepEqual(`완도${ilanglang("완도")}`, "완도랑");

//(추가) ~이어야/여야, ~이랑/랑
