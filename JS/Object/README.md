# Object

### [Object연습코드 - deepCopy(깊은복사) 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Object/objectDeepCopy.js)
### [Object연습코드 - definedProperty(프로퍼티 속성 변경하기)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Object/objectDefine.js#L61)

우리가 흔히 알고 있는 객체를 Object라고 하는데 기본적으로 함수도 따지고 보면 object이고 배열도 object이고 우리가 실행하는 js의 global도 object이다.<br>
이렇게 object는 광범위한 개념을 가지고 있는데 우리가 주로 객체라고 부르며 사용하게 될 것은 아래처럼

```javascript
const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo2() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};
```

와 같다. `user`라는 object 즉 객체가 있고 이 안에 포함되어 있는 값들은 property라고 부른다.<br>
이 property라는 개념이 처음 들을 땐 이해가 안될 수 있는데 그냥 object가 가지고 있는 속성들로 위의 예시에서 보자면 `user`라는 녀석은 object를 가지고있다.(식별자)<br>
이때 user 안의 `"":1`과 `" ":1`, `getInfo(){...}`,`[Symbol()]:'Hong'`들 하나하나가 user의 속성, 즉 프로퍼티라고 생각하면 된다.<br>

이때 위의 예시처럼 객체의 프로퍼티로는 다양한 값들이 들어올 수 있는데 단순한 원시타입부터 객체, 배열, 함수, 추가로 심볼까지 들어올 수 있다.

## method

일명 메서드로 객체 프로퍼티에서 사용되는 함수들을 통칭 메서드라 부르고 최근에는 조금 더 구분해서 부르고 있다<br>
`user` 객체에서 함수가 2종류가 있는데 하나는 `getInfo`와 `getInfo2()`2가지가 있다<br>
2종류모두 method라 할 수 있지만 정확히 더 구분하자면 `getInfo`는 함수 리터럴(값)을 가지는 key이고 `getInfo2()`가 method의 성격에 더 가깝다 생각한다.

보통 객체 내부의 함수를 작성할 때 `this`를 많이 사용하는데 이때 `getInfo2`와 같은 메서드는 사용시 무조건 `user.getInfo2()`와 같이 사용할 수 밖에 없고 어디 변수에 할당한다 하더라도 `getInfo2()`가 `return`하는 값이 담길 뿐이다.<br>
그렇기에 `getInfo2`가 사용되는 `this`는 객체 자신이 되는 것인데 그러면 객체 리터럴을 가진 `getInfo`도 `user.getInfo()`로 사용하지 않나? 생각할 수 있다.

정확히는 `getInfo`를 그대로 사용할 때 `user.getInfo()`처럼 사용한다면 자기 자신이 바인딩 되어 `this`가 자기 자신이 되겠지만 엄연히 객체 리터럴을 가진 key로 어떤 변수에 `const getInfoFucn = user.getInfo` 이런식으로 담게 되면 `getInfo`의 값인 함수 자체가 `getInfoFunc`에 담기게 되어 `getInfoFunc`는 하나의 함수가 된다.

고로 이때 `getInfoFunc`를 실행한다면 엉뚱한 `this`가 나오는 것을 확인할 수 있다(global)

**주의해서 작성해주자!**

## 프로퍼티 제어

우리는 보통 프로퍼티를 변경하거나 만들 때 처음 객체 리터럴을 만들 때 할당하는 식으로 하거나

```javascript
obj.id = 1;
obj["name"] = "lee";
```

이런식으로 `.`과 `[]`를 이용해서 할당하기도 할것이다.<br>
변경또한 똑같이 재할당하는 식으로도 하는데 몇가지를 진행해보면 `[Symbol]`타입은 출력이 안되는 것을 확인할 수 있다.<br>
`Object.keys(user)`와 `Object.values(user)`를 사용해서 살펴봐도 symbol타입은 출력되지 않는다.

이때 `Object.keys`와 `Object.values`는 각각 `Object`가 가지고 있는 메서드로 인자로 전달된 객체의 모든 `key`들과 모든 ` value`들을 각각 배열로 출력해준다.<br>
하지만 Symbol 타입과 같은 것들은 출력해주지 않는데 어떻게 해야 출력이 가능할까?<br>
`Reflect`를 사용하면 된다

`Reflect`엔 많은 기능들이 있는데 그 중에 `ownKeys`라는 메서드가 있는데 이 경우 `Reflect.ownKeys(user)`를 찍어볼 경우 Symbol까지 포함한 모든 key들이 출력되는 것을 확인할 수 있다

Reflect를 이용해서 오브젝트를 복사할 때 일반적으로 출력되지 않는 심볼타입들도 전부 가져와 복사 할 수 있고 현재 계속해서 Reflect가 발전중이니 유용할 것 같다.

이외에도 여러가지가 잇는데

- 기본적으로 `.`과 `[]`을 이용해 프로퍼티에 접근할 수 있다(이때 `[]`는 다이렉트로 key값을 적을 경우엔 무조건 string으로 작성해줘야하며 변수를 넣을 수도 있다)
- `in`을 통해 해당 키값이 존재하는지 확인할 수 있다. 같은걸로 `hasOwnProperty(key)`가 있다
- Reflect를 사용하려면 `Reflect.has(obj,key)`로 확인할 수 있다
- 심볼 프로퍼티가 있는지 유무만 체크하고 싶을 때 `Reflect`를 쓰지않고 `Object`의 메서드를 사용하려면 `Object.getOwnPropertySymbols(user)`를 사용하면 된다.
- 프로퍼티를 삭제하려면 `delete`를 사용하자

#### 오브젝트 클래스의 메서드

- `getOwnPropertyDescriptor(obj,key)`는 해당 프로퍼티의 value값과 프로퍼티 속성들이 나온다.(작성가능한지? 노출시킬건지? 수정가능한지? 등)
- 똑같이 작성하되 뒤에`getOwnPropertyDescriptors(obj)` s를 붙여주면 모든 프로퍼티를 확인할 수 있다
- `Object.defineProperty(obj,key,변경할 내용)`을 이용한다면 해당 프로퍼티의 속성들을 변경할 수 있는데
  - value : 해당 프로퍼티의 값
  - configurable : 속성의 값을 변경할 수 있고 삭제가 가능할 수 있는지?
  - enumerable : 속성이 밖으로 노출되서 확인이 가능한지?
  - writable : 할당연산자로 속성의 값을 바꿀수 있는지?
- `Object.keys(obj)` 와 `Object.values(obj)`로 각각의 키들과 값들을 배열로 받을 수 있다
- `Object.entries(obj)`를 사용하면 키와 값이 2차원 배열 즉, `[[key,value],[key,value]]`형식으로 나오게 된다
- 거꾸로 사용하고 싶다면 `Object.fromEntries([[key,value],[key,value]])`을 통해 2차원배열을 객체로 변경할 수 있다
- 임의의 객체 `obj`가 있는데 해당 `obj`를 다음과 같은 방법으로 새롭게 만들었다`Object.assign({},obj)`와 `{...obj}`, `new Object(obj)` 면 전부 같을까?
  직접 입력해본다면 다른 걸 확인할 수 있다. 오로지 같은건 `obj === new Object(obj)`만 `true`가 나오게 된다
- `Object.preventExtensions(obj)`를 넣게 되면 객체가 확장되는 것을 방지 한다( 추가(X),삭제,읽기,쓰기,재정의) x를 제외한 나머지는 가능하다
- `Object.seal(obj)` 추가(X),삭제(X),재정의(X), 읽기,쓰기
- `Object.freeze(obj)`는 아예 얼려버리는 것으로 읽기를 제외한 모든것이 안된다(enumerable만 false)
  - **주의할 점은 값을할당해도 오류는 없으며 하위 객체까지 freeze가 되진 않는다는 점이 있다**
