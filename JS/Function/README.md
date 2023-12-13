# Function

[함수 연습 문제 - once함수 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/function/onceFunction.js)
[함수 연습 문제 - closure를 활용한 요일 출력 함수](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/function/purefn_week_name.js)
[함수 연습 문제 - reduce 함수 직접 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/function/reducer.js)

---

함수는 하나의 단위로 실행되는 문(statement)들의 묶음이다.<br>
함수도 객체이며 javascript는 함수형 프로그래밍 언어로 핵심적인 부분이라 할 수 있다.<br>
그렇다보니 인터프리터 언어인 javascript는 모든 함수들이 사용될지 안될지 모르는 상황에서 모두 컴파일을 진행할 수는 없으니 먼저 선언시 function object에만 등록 해놓은 상태고 나중에 호출(call, invoke)되었을 때 평가하고 실행한다<br>

이는 javascript에서 class를 사용할 때도 볼 수 있는데 class는 function일까??<br>
class도 function으로 즉 constructor function 이라고 볼 수 있다<br>
그렇기에 `dog = new Dog()`를 실행할 경우 `Dog`라는 클래스의 constructor 함수를 호출하여 실행하는 것이다.

```javascript
class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}
console.log(typeof Dog); // function
```

이처럼 `class`를 만들어서 `typeof`연산자를 통해 확인해보니 function라고 뜬다.<br>
이처럼 javascript는 함수형 프로그래밍으로 객체지향 프로그래밍 처럼 class를 사용한다 하더라도 함수가 얼마나 중요한지 간접적으로 알 수 있다.

## 함수의 매개변수 (arguments - 값, parameter - 변수)

매개변수는 함수 실행 컨텍스트(Function Environment Record)에 별도 생성된다.<br>
이전 실행컨텍스트 그림을 확인하면 알 수 있듯이 함수가 function Object에는 등록되지만 평가가 됐다거나 그런 건 아니고 콜 되는 순간 실행 스택에 올라가고 Environment Record가 생겨나며 호이스팅부터 할당등의 평가 실행 들이 일어나게 된다.<br>

이때 함수 매개변수는 해당 Record에 생성되게 되고 함수가 종료될 시 G.C가 돌며 해당 Record가 사라질때 함께 사라지게 된다
<br>

매개변수또한 destructuring과 spread 연산자를 사용할 수 있따

```javascript
function ds1({ id, name }) {
  //...some code
}
const obj = { id: 1, name: "lee" };

ds1(obj);
```

javascrpit에서는 오버로딩과 오버라이딩이란 개념이 없는데 fucntion의 자유로운 환경 때문이라고 한다.<br>
기본적으로 javascrpit function은 실제로 작성될 때 필요한 매개변수는 1개라고 하더라도 0개를 보낼수도 있고 5개를 추가로 보낼 수도 있다.<br>
이처럼 자유로운 언어 특성때문인 것 같다.<br>

아무튼 javascript는 함수 선언할 때 같은 이름으로 선언할 경우 덮어 쓰게 되는 점이 있으므로 주의하자

## 함수 생성

함수의 생성 방식은 크게 약 3가지로 볼 수 있는데<br>

- 함수 선언식
- 함수 표현식
- Function 생성자 함수

이다.
함수 선언문은 `function f() {...}`로 javascript를 공부했다면 쉽게 알 수 있는 함수다 `function () {...}`로 작성할 시 익명함수로 사용할 수 있다.<br>

함수 표현식은 `const f1 = function ff() {}`처럼 사용할 수 있는데
여기서 이상한 점을 찾는다면 `f1`과 `ff`가 2개가 있는데 함수를 실행하려면 `f1`을 불러야 할까, `ff`를 불러야 할까?<br>

```javascript
const f1 = function ff() {
  //...some code
};
f1(); // OK!
ff(); // ff is not defiend!
console.log(f1); // [Function:ff]
```

이처럼 실행할 땡 `f1`을 사용하지만 이 함수는 `f1`함수가 아닌 `ff`란 함수이름을 가지고 있다.<br>
식별자 우선순위때문인데 만약 만드는 게 재귀함수라 `ff`함수안에 다시 스스로를 호출해야 한다면 이때는 `ff`로 실행 가능하다

#### 즉시호출 함수

외로 즉시 호출 함수라는 게 있는데 주로 익명함수를 사용하고 언어 그대로 함수를 바로 실행하는 특징을 가지고 있다.<br>

```javascript
(function () {
  //...some code
})();
```

이러면 실행문이 해당 코드를 만나면 곧바로`()`로 인해 실행하게 되고 이를 통해 불필요한 전역 변수와 메모리 낭비를 줄일 수 있으며 Closure나 부분적인 await가 활용 가능해진다
(최근 ECMA에선 최상위 코드에서 `await`가 가능해지기도 했다)

## 화살표 함수

- object method와 같은 **non-constructor!** 이다<br>
- arguments 객체(배열)가 없다
- 함수를 반환하는 고차 함수에 사용하기 좋다

화살표 함수 사용법은 `const f3 = ()=> {...}` 이렇게 사용한다.<br>
다만 화살표 함수의 특징중 하나로 함수가 바로 return을 사용할 경우 굳이 `{}`로 감싸고 `return`을 적을필요 없이 `const f3 = () => ...`식으로 바로 반환해도 된다. `=>`가 `{return}`을 품고 있다라고 보면 좋을 것 같다.<br>
물론 statement가 2개 이상으로 늘어날 경우 `{}`을 꼭 적고 그 속에서 반환할 게 있다면 `return`을 적어주자<br>
또한 매개변수도 1개라면 매개변수를 감싸고 있는 괄호도 생략할 수 있다<br>
`const f3 = arg => ...`<br>

또 하나의 특징으로 내부/콜백 함수 시 `this`가 외부(상위/전역)객체를 가르킨다는 것이다.<br>
즉 나의 부모의 `this`를 본다라고 생각하면 좋다.<br>
또한 원래 선언문 같은 경우 같은 이름으로 `function`을 이용해 선언할 경우 덮어쓰는 방식이 사용됐지만 `const`를 사용하다보니 같은 이름으로 화살표 함수를 사용할 경우 에러가 발생한다!!

## 함수의 호출 방식과 this

호출 방식은 총 3가지 정도로 일반함수 | 메소드 | 생성자 함수가 있다<br>
각각 호출 할 때의 this가 정해지는 데 기본적으로 일반함수의 this는 global을 가르키게 되고 메소드 | 생성자 함수 는 생성된 instance를 가르키게 된다

```javascript
const obj = {
  name: "ObjName",
  bark() {
    // good!(호출한 객체)
    console.log("bark=", this.name);
  },
  bark2: () =>
    // bad!! (this = 전역)
    console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();
```

### call , apply

호출 방식으로는 `call`, `apply`, `bind` 가 있다.<br>
먼저 우리가 기본적으로 선언된 함수를 사용하는 방법은 대부분 `()`를 사용하기에 `apply`와 `call`은 처음 들어본 경우가 많다.<br>
나도 처음 들었을 때 똑같은 거 아닌가 싶었지만 직접 사용법을 보면 다르다는 것을 확인할 수 있다<br>

```javascript
const example = function (a, b, c) {
  return a + b + c;
};

example(1, 2, 3);
example.call(null, 1, 2, 3);
example.apply(null, [1, 2, 3]);
```

`call`과 `apply`둘 다 arguments 로 기본 `()`사용법과 똑같이 전달한다.<br>
다른 점이 있다면 맨 처음의 `null`이 있는데 이는 함수의 `this`를 대체하는 것이다.

만약 `call`과 `apply`를 사용할 때 `null` 자리에 `this`로 사용하고 싶은 객체를 입력할 경우 그 함수가 실행될 때 자리는 입려한 객체가 `this`로 된다.<br>
**즉, call이나 apply를 사용해서 this를 정의해주면 다른 객체의 파라미터나 메소드를 가져와 사용할 수 있다**

### 특징

주로 함수의 `arguments`에 사용된다고 하는데 화살표 함수에는 `arguments`말고 매개변수 위치에서 `...`을 사용해 받지만 이전 기존 함수 선언식은 arguments라고 해서 함수에 들어온 인자를 배열 형식으로 받을 수 있는 게 있다<br>
다만 배열 형식이지 정식 배열은 아니다.<br>
유사 배열로 배열의 형식을 뛰고 index로 값도 가져올 수 있지만 배열이 가진 메서드를 가질수는 없다.<br>
이럴 때 `call`과 `apply`를 사용해서

```javascript
function example3() {
  console.log(Array.prototype.join.call(arguments));
}
example3(1, "string", true); // 1,string,true
```

이런식으로 다른 곳의 메서드들을 끌고와서 `this`를 할당해 줌으로써 빌려사용할 수 있다.<br>

### 다른 bind

`bind`는 call과 apply와는 다르게 함수가 가리키는 `this`만 바꾸고 호출하지는 않는다.<br>
또 그 함수를 가져와서 사용하면서 `this`만 바꾸는게 아닌 `this`를 정의하고 그 함수를 복사해 새로운 함수를 만들어 리턴해준다.

```javascript
function f() {
  console.log("new function");
}
console.log(f === f.bind(this)); // false
```

둘이 다른 것을 확인할 수 있듯이 같은 함수가 아닌 새로운 함수를 반환하는 것이 `bind`이다.<br>

---

최종적으로 `call`,`apply`, `bind`는 참조하는 함수 조작이다.<br>
`this`를 바꿔서 마치 해당 함수가 어느 객체 안에 있게 할 수 있는것이다.

`call`과 `apply`는 바로 적용하면 되지만 `bind`는 반환이기 때문에 어떤 변수에 저장하고 `()`로 실행하거나 `.bind()()`로 바로 실행하면 된다.

`call`과 달리 `apply`는 배열로 받는 `call`과 같다.

## 순수함수

함수에 대해서 가장 중요한 개념이 있는데 바로 순수 함수 개념이다.
순수함수를 설명하자면

- 함수로서의 함수
- 수학적 함수
- **입력이 같으면 결과도 같다**
- **부수 효과(side effect)가 없다**

함수란 어떤 하나의 동작을 하는 어떠한 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합이다<br>
그렇기에 최대한 side effect가 적고 동일한 입력 동일한 결과를 나오게 해야 매우 효율적이다 라고 보고 실제로 그렇게 생각한다.

## 콜백 함수 와 고차함수

콜백은 간단한 함수(너무 복잡하지 않은)로 다른 함수의 value 즉 arguments로 전달되는 함수이고 실행되는 것은 오직 이벤트가 발생되었을 때 하는 함수를 콜백함수라고 한다.<br>

여기서 이벤트란 뭐 클릭이나 서버에서 데이터가 도착했을 때, 로드 될 때 등 들이 이벤트라고 볼 수 있다.<br>

뚜렷하게 고차함수와는 다른 것을 볼 수 있는데...고차 함수는

- 인수(매개 변수)로서의 함수
- 반환 값으로서의 함수(closure)
- 식별자로서의 함수 (1급 객체)
- 배열 안 요소 함수(배열 원소)

즉 ,1급 객체로서의 함수이다.<br>
여기서 1급 객체란 다른 객체들에 일반적으로 적용 간으한 연산을 모두 지원하는 객체를 가리킨다<br>
특징으로는

- 변수에 할당할 수 있다
- 다른 함수를 인자로 전달받는다
- 다른 함수의 결과로서 리턴될 수 있다
  인데 고차함수의 개념과 매우 동일하기에 1급 객체로서의 함수라고 볼 수 있는 것이다.

```javascript
const f1 = (f, val) => f(val);
f1(console.log, "f1");
```

위에서 f1에 console.log라는 함수가 전달되긴 함으로 콜백 함수의 첫번째 조건을 만족하지만 2번째인 이벤트가 발생되었을 때 실행되는 함수가 아니므로 콜백함수가 아니다.<br>
따라서 전달되는 console.log를 고차함수라고 부른다.<br>

## unary 함수

고차함수에서 인수(매개 변수)의 개수를 1개로 제한하여 실행하는 함수로 인자를 단 하나만 받는 함수를 말한다!

```javascript
const arr = ["1", "2", "3"];

const rets = arr.map(parseInt);
console.log(rets); // [ 1, NaN, NaN ]

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

const rets2 = arr.map(unary(parseInt));
console.log(rets2); // [ 1, 2, 3 ]
```

를 보면 실제로 parseInt를 할경우 parseInt에 map의 특성상 3개의 인자를 주다보니 parseInt가 실행되는 조건이 안맞아서 `NaN`이 뜨게 된다.<br>

그래서 아래의 `unary`함수를 이용해서 `fn.length`는 전달받는 매개변수의 개수를 알려주기에 1개일때는 그대로 실행하고 그게 아니라면 매개변수를 하나만 받는 함수를 만들어 parseInt를 실행하도록 한다.

---
