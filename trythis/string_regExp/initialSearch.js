import assert from "assert";

const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

const searchByKoreanInitialSound = (arr,initial) => {
    arr.find(str=>{})
}

// assert.strictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), "고성군");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), "토성면");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), "북면");
// assert.strictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), undefined);


searchByKoreanInitialSound(s, 'ㄱㅅㄱ'); // 고성군
searchByKoreanInitialSound(s, 'ㅌㅅㅁ'); // 토성면
searchByKoreanInitialSound(s, 'ㅂㅁ');  // 북면
searchByKoreanInitialSound(s, 'ㅍㅁ');  // undefined