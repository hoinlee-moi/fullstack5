# String & RegExp

기본적인 string이라는 primitive 타입은 무엇인지 이미 알고 있고 추가적인 메서드들을 알아보려고 한다<br>

## 알아두면 좋은 String Prototype method

- padStart : 현재 문자열의 시작을 다른 문자열로 채워 주워진 길이를 만족하는 새로운 문자열 반환(채워넣기는 대상 문자열의 처음부터 적용)
- padEnd : 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환(채워넣기는 대상 문자열의 끝부터 적용)
- startsWith : 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 반환(boolean)
- endsWith : 어떤 문자열에서 특정 문자열로 끝나는지를 확인하여 결과를 반환(boolean)

```javascript
const str = "한글";
const num1 = 7,
  num2 = 24;

str.padStart(5, " "); // '     한글'
str.padEnd(5); // '한글   '
num1.toString(), padStart(2, 0); // '07'
num2.toString(), padStart(2, 0); // '24'

str.startsWith("한"); // true
" 세종".startsWith(" "); // true
str.endsWith("글"); // true
```
