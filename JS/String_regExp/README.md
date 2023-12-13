# String & RegExp

### [연습문제 - 한글유무 체크하기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/string_regExp/hangulCheck.js)

### [연습문제 - 초성검색](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/string_regExp/initialSearch.js)

### [연습문제 - 전화번호 체크](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/string_regExp/replaceCallback.js)

### [연습문제 - 유니코드로 한글 체크하기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/string_regExp/unicodeKorean.js)

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

추가적으로 `charCodeAt(idx)` 과 `String.fromCharCode(unicode)` 을 통해 코드를 다루는 게 있다

- `charCodeAt(idx)` : 지정된 인덱스에서 UTF-16 코드 단위를 나타내는 정수 `string`을 반환한다
- `String.fromCharCode()` : UTF-16코드 유닛의 시퀀스로부터 문자열을 생성해 반환한다

```javascript
"A".charCodeAt(0); // 65
String.fromCharCode(65); // 'A'

"가".charCodeAt(0); // 44032
String.fromCharCode(44032); // 'A'
```

이렇게 각 UTF-16코드 번호를 통해 문자를 뽑아낼수도 또는 문자에서 코드번호를 뽑아낼 수 있다

## Template Literal

JS사용시 string안에 변수를 넣고 싶은 경우 보통 `console.log("my name is" + name)` 이런식으로 넣곤 했다<br>
하지만 Template Literal이 등장하고 나선 굳이 `+`를 통해 코드의 길이를 늘어뜨리지 않아도 string과 변수를 함께 사용할 수 있게 되었다<br>
함수로도 사용가능한데

```javascript
const holiday = "한글날";
console.log(`오늘은 ${holiday}입니다`); // 오늘은 한글날 입니다

function f(txts, ...args) {
  console.log("txtx>>", txts);
  console.log("args>>", args);
}
f`오늘은 ${holiday}입니다`;
/*
txts>> ['오늘은 ', '입니다' ]
args>> ['한글날']
*/
```

` `` ` 백틱을 통해 그냥 작성할 수도 있고 함수로 만들어서 사용할 수도 있다<br>
이경우 함수의 첫번째 인자로는 변수를 기점으로 끊어진 string(띄어쓰기 포함)들이 하나의 배열로 들어가게 되고 그 뒤의 매개변수들이 사용된 변수들로 쭉 나오게 된다.<br>
만약 2번째 인자면 썼다면 글을 왼쪽에서 오른쪽으로 읽을 때 처음 등장하는 변수만 들어가게 되고 나머지는 무시된다<br>
고로 `...` 나머지 연산자를 이용해 해당 변수들도 배열로 받게되면 훨씬 좋다

## RegExp (정규표현식)

정규식은 이해보다 기억해야 하는 종류가 많은데 하나씩 살펴보자<br>
기본적으로 pattern, flag, common character 등이 들어가는데
`/pattern/flag` 형식으로 사용된다.<br>
pattern은 charter를 가지고 operator나 common character등이 있다

### common character

- \d : 숫자 `[0-9]`
- \w : 영숫자 `[0-9A-z_]`
- \s : 공백/탭/줄바꿈
- . : 개행문자 외 모든 문자
- \D : 숫자가 아닌것 `[^0-9]`
- \W : 영숫자가 아닌것 `[^0-9A-z_]`
- \S : 공백/탭/줄바꿈 아닌것
- \x : 16진수 (ASCII)
- \u : 16진수 (unicode)

### operator

- `{n,m}` : n개부터 m개
- `*`,`{0,}` : 0개 이상
- `+`,`{1,}` : 1개 이상
- `?`,`{0,1}` : 없거나 1개
- `^` :시작
- `$` : 끝
- `()` : 묶음
- `[]` : 범위 묶음
- `[^x]` : x제외/not
- `|` : or

여기서 주의 할 점은 `^`과 `[^x]`에서의 `^`은 다르다는 것을 주의하자

### flags

- i : ignore case
- g : global
- m : multi-line
- y : lastIndex적용
- u : unicode 전체지원
- s : common-character .에 개행도 포함

여기까지가 자주 사용하거나 간혹 사용하게 될 정규 표현식들이고 실제로 다 기억하고 쓰기엔 어렵다.<br>
많은 정보가 있으니 하나씩 찾아가며 써도 괜찮을 것 같다<br>
자꾸 쓰다보면 결국 기억하고 안보고 작성할 수 있지 않을까도 싶다

```javascript
/[A-z\d]/.test(str) // true
/(A-z\d)/.test(str) // false
/(A-z\d)/.test('XA-z2') true
/(A-z\d)/.test('XAz2') false
```

`()`와 `[]`의 구분을 확실하게 하자, 묶음과 범위의 묶음은 엄연히 다르다

### 찾는 방법

일단 정규 표현식 자체는 문자열에서 특정 문자 조합을 찾기 위한 패턴이다.<br>
그러면 정규표현식 만으로 찾을 수 있나? 해당 메서드들을 찾아야 하는데 일단 정규 표현식은 어떻게 만들까?

```javascript
const regexp1 = /[A-Z]/;
const regexp2 = new RegExp(/[A-Z]/, "g");
```

배열을 만들데 `[]`와 `new Array()`가 있듯 정규표현식도 그냥 `//`에 패턴을 집어넣어 만드는 것과 `new`를 통해 만들 수도 있다<br>
이때 `new RegExp()`는 2개의 인자를 받는데 첫번째는 패턴을 받고 2번째는 flag를 받는다<br>

그럼 이 표현식을 어떻게 활용할까?

```javascript
const str = "Hello, my name is Lee";
regexp1.test(str); // true
str.match(regexp2); // ['H','L']
regexp2.exec(str); // ['H',index:0, input: 'Hello, my name is Lee, groups:undefined]
```

각각 `test`와 `match`, `exec`로 사용하게 되는데 주로 `match`와 `test`를 자주 본 것 같다<br>

`정규식.test(문자열)`로 문자열이 정규식을 통과하는지 확인하고 만약 정규식 조건에 문자열이 걸리게 되면 true 걸리지 않으면 false를 반환한다<br>
`문자열.match(정규식)` 문자열내에서 정규식 검사를 진행하고 정규식에 걸리는 문자열들을 하나의 배열로 반환해준다

추가적으로 `replace, replaceAll`이 있는데 각각 `replace`는 문자열에서 인자에 해당하는 문자열들을 찾아 내가 넣은 문자열로 변환해준다.<br>
다만 `replace`는 처음 찾은 문자열만 변환하는 반면 2021에 등장한 `replaceAll`은 무조건 모든 문자열을 변환해준다

다만 정규식을 사용한다면 다른데 `replace`는 정규식을 사용해서 정규식에 해당하는 문자열 하나를 변겨할 수도 있고 flag `g`를 포함하여 전부 검사하여 변경할 수도 있다<br>
`replaceAll`은 정규식 사용시 무조건 `g` flag를 넣어야 하며 빼먹을 경우 에러가 발생한다

```javascript
"세종대왕".replace("왕", "황"); // '세종대황'
// str = 'Hello, my name is Lee'
// regexp1 = /[A-Z]/;
// regexp2 = new RegExp(/[A-Z]/,'g')

str.replace(regexp1, "A"); // 'Aello, my name is Lee'
str.replace(regexp2, "A"); // 'Aello, my name is Aee'

str.replaceAll(regexp2, "A"); //'Aello, my name is Aee'
```

`replace`에서 좋은 기능중 하나로 각 검사한부분을 뒤에 변경할 때 변수로 구분시킬 수 있는것인데

```javascript
str.replace(/([A-Z])/g, "$1-"); // 'H-ello, my name is L-ee'
```

이 경우 `()`을 통해 하나의 묶음으로 된 문자열을 `$`을 통해 구분시킬 수 있다<br>
순서는 당연히 왼쪽에서 오른쪽으로 첫번째 묶음은 `$1`부터 시작한다

실제론 replace 뒤에 들어가는건 변경할 문자열이기도 하지만 콜백함수도 가능하다

```javascript
str.replace(/[A-Z]/g, (mathedStr, pos, orgStr) => matchStr.toLowerCase());
// hello, my name is lee
```

여기서 뒤에 콜백함수가 들어가게 되면 첫번째 인자인 `matchStr`은 일치하는 하위 문자열이 된다<br>
그리고 `pos`는 검사중인 문자열 내에서 일치하는 하위 문자열의 오프셋을 나타낸다(`'abcd'`에서 일치하는 문자열이 `'bc'`인 경우 오프셋은 1)<br>
마직막 `ortStr`은 오리지널 string으로 검사되는 전체 문자열이다.
