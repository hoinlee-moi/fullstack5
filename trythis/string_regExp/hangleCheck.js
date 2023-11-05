import assert from "assert";

const hasHangul = (str) => /[ㄱ-힣]/g.test(str);

const isHangul = (str) => !(/\w/.test(str));
const isHangulV2 = (str) => str.match(/[ㄱ-힣\s]/g).length === str.length;

assert.deepEqual(hasHangul("강원도"), true);
assert.deepEqual(hasHangul("ㄱㄴㄷ"), true);
assert.deepEqual(hasHangul("ㅜㅜㅠㅠ;"), true);
assert.deepEqual(hasHangul("케잌뷐"), true);
assert.deepEqual(hasHangul("12345"), false);
assert.deepEqual(hasHangul("IC"), false);

assert.deepEqual(isHangul("강원도"), true);
assert.deepEqual(isHangul("ㄱㄴㄷ"), true);
assert.deepEqual(isHangul("ㅜㅜㅠㅠ;"), true);
assert.deepEqual(isHangul("케잌뷐"), true);
assert.deepEqual(isHangul("12한글345"), false);
assert.deepEqual(isHangul("아산IC"), false);


