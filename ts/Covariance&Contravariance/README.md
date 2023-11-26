# 타입의 공변성과 반공변성
타입스크립트를 배우며 가장 애매한 개념이었던 것 같다.<br>
똑같은 타입을 할당하지만 어떤상황은 되고 다른 상황에선 안되고 이런 환경이 처음 배울 때 어려운 개념으로 들어왔다<br>
그리고 처음으로 Covariance라는 공변성이란 개념을 듣게 되었다<br>
- 공변성(Covariance) : A가 B의 서브타입이면, T`<A>`는 T`<B>`의 서브타입이다
- 반공변성(Contravariance) : A가 B의 서브타입이면, T`<B>`는 T`<A>`의 서브타입이다.
- 이변성(Bivarinace) : A가 B의 서브타입이면, T`<A>` -> T`<B>`도 되고 T`<B>` -> T`<A>`도 됨
- 불변성(immutability) : A가 B의 서브타입이더라도, T`<A>` -> T`<B>`도 안되고 T`<B>` -> T`<A>`도 안된다

일단 타입스크립트에서의 타입들은 **기본적으로 공변성 규칙**을 따르지만, 유일하게 **함수의 매개변수는 반공변성**을 가지고 있다<br>
단, strictFunctionTypes옵션이 true일때의 기준이다. 만약 strict 모드가 아니라면 함수의 매개변수는 이변성을 가진다.
<br>


## 공변성(Covariance)
A(좁은 타입)가 B(넓은 타입)의 서브타입이면, T`<A>`는 T`<B>`의 서브타입이다<br>
로 기본적으로 공변성 규칙이기 때문에 대다수 일반적인 경우 공변성이다
```javascript
let stringArray: Array<string> = [];
let array: Array<string | number> = [];

array = stringArray; // stringArray는 array를 포함한다
stringArray = array; // array는 stringArray포함할 수 없다

// --------------------------------------------------

let subObj: { a: string; b: number } = { a: '1', b: 1 };
let superObj: { a: string | number; b: number } = subObj; // superObj는 subObj 포함

// subObj < superObj
// 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
```

왜냐면 당연히 짜장면아니면 짬뽕 먹겠다는 사람이 있고 짜장면만 먹겠다는 사람이 있다<br>
짜장면이나 짬뽕 둘 중 하나를 먹는다는 사람에게 짜장면을 주면 먹을 수 있지만 짜장면만 먹겠다는 사람에게 짬뽕을 줄 수 없기 때문이다<br>
짜장면 또는 짬뽕이니까 짜장면만 있으면 되는 거 아닌가요? 하겠지만 그건 인간의 논리고 컴퓨터는 그렇지 않다<br>
둘 중에 하나가 틀리면 에러가 생기는 상황에 컴퓨터는 어떤걸 해야돼요? 라는 상태가 되는 것이다<br>

이렇듯 A가 B의 서브 타입일 때 T`<A>`가 T`<B>`의 서브타입이 된다면 T를 공변적이라 부를 수 있다

이걸 조건부 타입을 통해 확실히 정리해본다면

```javascript
// 조건부 타입 : T가 P에 속해있으면 ? true : false
type IsSubtypeOf<T, P> = T extends P ? true : false;


type T1 = IsSubtypeOf<Array<string>, Array<string | number>>; // true

type T2 = IsSubtypeOf<Array<string | number>, Array<string>>; // false


type T3= IsSubtypeOf<{ a: string; b: number }, { a: string | number; b: number }>; // true

type T4 = IsSubtypeOf<{ a: string | number; b: number }, { a: string; b: number }>; // false
```

## 반공변성(Contravariance)
A(좁은 타입)가 B(넓은 타입)의 서브타입이면 T`<B>`는 T`<A>`의 서브타입이다<br>
말 그대로 반 공변성으로 위의 공변성 규칙이 함수의 매개변수로 전달된 경우 반대로 동작한다

```javascript
type Logger<T> = (param: T) => void;

let A: Logger<number> = (param) => {
   console.log(param); // number
 };

let B: Logger<string | number> = (param) => {
  console.log(param); // string | number
};

A = B; // OK
B = A; // Error

// 기본적으로 number < string | number 지만, 함수 매개변수 제네릭에서는 거꾸로
// Logger<string | number> < Logger<number>
```
코드로 보면 인자로 `string | number`를 받는 `B` 함수와, 인자로 `number`만을 받는 `A` 함수가 있다.<br>
원래대로 공변성의 규칙이라면 `B` 함수는 넓은 타입이고 `A`함수가 좁은 타입이니, `B=A`식이 성립되어야 하지만 에러가 발생한다<br>
함수의 매개변수의 타입을 다를경우 반 공변석을 따르기에 `A=B`가 성립된다

### 함수에서의 공변성과 반공변성
함수에서는 반공변성이라 햇는데 각각 다른 면이 있다
- 함수의 리턴값 타입은 공변성
- 함수의 매개변수 타입은 반공변성
- strictFunctionTypes모드가 적용됨

return 타입은 공변성이기 때문에 넓은 타입에서 좁은타입으로 갈 수 있고 반대로 갈경우 에러가 뜬다<br>
하지만 매개변수일 경우 반공변성이기때문에 좁은타입에서 넓은타입으로 갈 수 있고 반대로 갈경우 에러가 생긴다<br>

## 이변성(Bivariance)
Typescript는 기본적으로는 함수의 인자를 다루는 과정에서 이변성 구조를 가지고 있다<br>
공변성과 반 공변성을 동시에 가지고 있고 그로 인해 Casting 가능한 어떤 객체든 허용하게 되는 것이다<br>
이런 함수 인자가 이변성이라는 오류를 바로 잡아 반공변적이게 바꿔주는 게 strictFunctionTypes 인것이다.<br>
따라서 해당 옵션을 `false`로 둘 경우 이변성이 돼서 매개변수 타입이 다른 함수끼리 막 가능해지낟

기본적으로 매개변수가 이변성을 가지는 것은 리턴값은 공변성이지만 매개변수는 반공변성으로 문제가 생기기 때문이다<br>

---

### 개인적인 이해

함수의 리턴이나 typescript 기본적으로 공변성을 띄는 이유는 우리는 typescript에서 타입네로잉을 통해 타입을 더욱  구체적으로 좁히는 걸 좋아한다<br>
이는 에러의 가능성을 떨어뜨리기 때문이다. 확실한 타입으로 좁혀서 프로그래밍 하는게 예상치 못한 예외를 처리하는데 더육 안전한 것도 있다<br>
그렇기에 위에 설명한 짜장면 짬뽕 얘기처럼 넓은 선택에서 좁은 선택으로 들어가는 것은 가능한 것이다.

다만 함수 매개변수는 왜 반 공변성일까? 생각해보면 함수의 특성상 그럴 수 밖에 없다 생각한다<br>
함수는 어떤 특별한 목적의 작업하기 위한 독립적으로 설계된 코드의 집합이다<br>
매개변수는 이 함수가 그 특별한 목적을 작업하기 위해 필요한 준비물이다<br>
**해당 준비물이 어떠한 값에 따라 실행하는 게 다르도록 구성해 놨는데 마음대로 좁힐 수 없기때문이라 생각한다**
string과 number 타입 둘중 하나를 받아서 판별하는 함수를 만들었는데 그걸 string으로 받는 매개변수 타입을 좁히게 되면 해당 함수의 존재 이유가 사라지기 때문이라 생각된다<br>
고로 함수이기 때문에 반 공변성을 가지게 된다 생각한다