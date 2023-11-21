# 배열
### [배열 연습 코드 - Algorithm Test(Range Sum)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Array/rangeSum.js)
### [배열 연습 코드 - Algorithm Test(KeyPair)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Array/keyPair.js)
### [배열 연습 코드 - Composition fucntion](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Array/composition.js)
### [배열 연습 코드 - Range(파이썬에 존재하는 range 함수 직접 만들기)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Array/range.js)

기본적으로 JS Array 는 List 객체다<br>
실제로 배열을 `Reflect`를 사용해서 하나씩 꺼내보면 `[1,2] => {'0':1,"1":2,"length":2}` 라고 출력된다 <br>
이로 인해 배열의 각 요소(element)는 인덱스(프로퍼티의 키)로 접근한다 <br>

**length 프로퍼티를 가지며** 배열 길이보다 큰 접근은 undefined.<br>
length를 조정하여 배열의 길이를 조절할 수도 있다
<br>
이때 length를 기존의 배열 길이보다 줄이면 배열의 뒤부터 삭제가 되고 늘릴경우 배열의 뒤에 empty가 생기게 된다

추가적으로 배열(Array)에 있는 메소드들은 순수 함수와 비 순수함수 모두를 포함하고 있으니 조작할 때 유의하자


## JS에서의 배열

기본적으로 다른 데서 보는 배열은 처음 메모리 주소를 &1000 이라고 한다면 8byte 크기의 요소들이 존재한다 할때 차곡차곡 &1000,&1008,&1016... 이런식으로 메모리 주소를 잡아놓게 된다.<br>
이로인해 배열은 인덱스를 통해 효율적으로 접근할 수 있는데 만약 배열이 정렬되어 있지 않다면 모든 배열 요소를 처음부터 값을 발견할 때까지 차례대로 탐색하는 경우도 있다<br>

가장 큰 단점 중 하나는 배열에 요소를 삽입하거나 삭제하는 경우, 배열 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점또한 있다.
<br>

하지만 javascript에서의 배열은 일반적인 배열과 다른데 가변성이며 어떤 요소가 들어와도 가능한 JS배열의 특징상 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되고 연속적으로 이어지지 않아도 된다.
<br>
고로 JS의 배열은 인덱스로 배열 요소에 접근하는 경우 일반 배열들보다 느릴 수 있지만 해시 테이블로 특정 요소를 탐색하거나 배열 요소를 삽입 삭제할 때 성능이 일반 배열보다 더 좋다

---

## 배열의 메서드

위에서 한번 다뤘던 내용처럼 배열의 메서드엔 순수와 비순수 함수들이 있다

### 순수 함수
- concat : 배열을 합친다
- join : 배열의 요소를 모두 합쳐 string으로 반환해준다
- values : 해당 배열을 반복 가능한 iterator를 반환한다
- indexOf : 전달되는 값의 인덱스를 찾는다 (못 찾을 경우 -1반환)
- lastIndexOf : 전달되는 값을 뒤에서부터 인덱스를 찾아나간다(동일한 값이 앞 뒤에 있을 대 뒤의 값의 인덱스를 반환)
- includes : 전달되는 값이 배열에 존재하는지 파악한다(boolean 리턴)
- findIndex : 콜백함수를 받아 요소 하나씩 콜백함수를 실행하여 index를 찾는다
- findLastIndex : findIndex와 동일하지만 역순으로 순회한다
- slice : 시작 인덱스와 끝 인덱스를 받아 배열을 잘라낸다(주의할 점은 끝 인덱스까지 잘라내는 것이 아닌 끝 인덱스의 바로 앞까지 자른다)
- entries : 배열을 `[키(인덱스),값(요소)]`형태의 새 배열로 만든 후 iterator를 반환한다
- flat : 다차원 배열을 전달하는 값의 깊이까지 평탄화 해준다
  - ex) `arr2 = [0, 1, [2, [3, [4, 5]]]];`<br>
  `arr2.flat()`=>`[0,1,2,[3,[4,5]]]`<br>
  `arr2.flat(3)` => `[0,1,2,3,4,5]`
- some : 배열 안의 어떤 요소라도 주어진 콜백 함수를 하나라도 통과하는 지 판별한다. 이때 중요한 점은 하나라도 통과한다면 `true`가 나온다
- every : 배열 안의 모든 요소가 주어진 콜백 함수를 통과하는지 판별, some와 다른 점은 모두 통과해야만 `true`가 나온다
- map : 배열을 순회하며 각 요소마다 주어진 콜백함수를 실행하고 return된 값으로 새로운 배열을 반환한다
- filter : 배열을 순회하며 각 요소마다 주어진 콜백함수를 실행하고 조건에 맞는지 filtering하여 조건에 맞는 요소들만 담긴 새로운 배열을 반환한다
- forEach : 배열을 순회하며 각 요소마다 주어진 콜백함수를 실행만 한다.
- reduce : 배열을 순회하며 콜백함수를 실행하는데 이전 요소에서 return한 값을 누적하여 다음 콜백함수를 실행할 때 첫번째 매개변수로 전달한다.
마지막에 최종적으로 누적된 값을 return한다

<br><br>

### 비 순수 함수

- push : 배열의 가장 마지막 index에 전달되는 새로운 요소들을 추가한다.(여러개가 들어올 수 있다)
- pop : 배열의 가장 마지막 index를 제거하고 그 요소를 반환한다
- shift : 배열의 가장 첫번째 index를 제거하고 해당하는 요소를 반환한다.
- unshift : 배열의 가장 첫번째 index에 전달되는 새로운 요소들 추가하고 배열의 길이를 반환한다
- fill : `(value,startIndex,endIndex)` 3개의 값을 받아 시작 인덱스부터 끝 인덱스까지 요소를 value로 변환한다. 이때 value만 주어질 경우 모든 요소가 value로 변환된다.
- sort : 정렬 메서드로 아무것도 주어지지 않은채로 실행하면 unicode를 기준으로 정렬하며 콜백함수를 통해 양수,0,음수를 통해 크기비교를 하여 정렬시킬 수 있다
- reverse : 배열 전체를 거꾸로 뒤집는다

<br><br>

그외의 static Methods를 확인하고 싶다면 `Array.prototype`을 `console.dir`로 출력하거나 배열 하나를 만든 후 `arr.__proto__`를 출력해보자

## 배열 만들기

배열은 여러 방법으로 만들 수 있는데

```javascript
const arr = Array(3) //[ <3 empty items> ]
const arr2 = new Array(3) //[ <3 empty items> ]
const arr3 = [] // []
const arr4 = Array.from('ㄴㄷㅅ')// 유사배열 객체 or iterable객체
```

### 유사배열 객체

방금 위에서 배열 만들기를 공부할 때 유사배열 객체에 대해 나왔는데 배열이면 배열이지 유사배열은 또 무엇일까?<br>

유사배열 객체는 말 그대로 배열과 유사한 형태지만 배열은 아니다.<br>
인덱스는 0부터 시작해야 하며, 반드시 **length** 프로퍼티를 가져야 한다. <br>
순회 (for ~ of) 가능한 **iterable** 객체이다<br>
forEach를 제외한 Array 메소드를 사용할 수 없다!<br>
**Array.from(유사배열객체)**를 통해 진짜 배열로 만들 수 있다<br>

문자열, object, arguments, DOM NodeList, jQuery 등이 있다

