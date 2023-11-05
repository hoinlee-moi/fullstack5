import assert from "assert";

//문자열 str에서 대문자만 골라 소문자로 변환하세요.
const upperToLower = (str) => str.replace(/[A-Z]/g, (v) => v.toLowerCase());

assert.strictEqual(
  upperToLower("Senior Coding Learning JS"),
  "senior coding learning js"
);

// upperToLower('Senior Coding Learning JS');
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

//전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const telfmt = (phoneNumStr) => {
  if (phoneNumStr.slice(0, 2) === "02" && phoneNumStr.length < 11) {
    return phoneNumStr.length < 10
      ? phoneNumStr.replace(/(\d{2})(\d{3})/g, "$1-$2-")
      : phoneNumStr.replace(/(\d{2})(\d{4})/g, "$1-$2-");
  }
  if (phoneNumStr.length === 8) {
    return phoneNumStr.replace(/(\d{4})/, "$1-");
  }
  return phoneNumStr.length < 11
    ? phoneNumStr.replace(/(\d{3})(\d{3})/, "$1-$2-")
    : phoneNumStr.replace(/(\d{3})(\d{4})/, "$1-$2-");
};

console.log(telfmt("0101234567")); // '010-123-4567' 10글자
console.log(telfmt("01012345678")); // '010-1234-5678' 11글자
console.log(telfmt("0212345678")); // '02-1234-5678' 10글자
console.log(telfmt("021234567")); // '02-123-4567' 9글자
console.log(telfmt("0331234567")); // '033-123-4567' 10글자
console.log(telfmt("15771577")); // '1577-1577' 8글자
console.log(telfmt("07012341234")); // '070-1234-1234' 11글자

/*ex) in JSX
   <small>{telfmt(user.tel)}</small>*/
