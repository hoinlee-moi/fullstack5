# Iterator & generator

[iterator & generator 연습코드 - 직접 만든 class iterable하게 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/utils/collection.js#L82)
[iterator & generator 연습코드 - 2호선 순환 지하철 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/generator/subwayGenerator.js#L27)

## Iterator
Iterator는 `next`메서드를 가지고 있는 객체로 순차적으로 원소들을 탐색하며, `next` 메서드 호출시마다 새로운 객체를 반환한다<br>
이때 반환되는 객체가 중요한데 `value`와 `done`프로퍼티를 가지고 있는 객체를 반환한다.<br>
이때 `done`프로퍼티의 값이 true가 되면 순환을 멈추게 되는데 이때의 대부분의 iterator들은 `done`이 true가 될때의 `value`를 생략한다
`return {done:true};`

그럼 도대체 Iterable 하다는 어떤 뜻일까? 코드적으로 봤을 때는 `Symbol.iterator`라는 메서드를 가지고 있다라고 보며 이 메서드는 위에서 말한 next()함수를 가지고 잇는 객체를 반환한다.<br>
즉, iterator를 반환한다.

### Iterable Object
그럼 ietrable한 객체들은 무엇이 있을까?
- Array
- Set
- Map
- DOM `Node List`
- promitive `string`

등은 실제로 내부에 `Symbol.iterator`라는 메서드를 가지고 있다.<br>
실제로 임의의 배열인 `arr = [1,2,3,4,5]`를 만든 후 `arr[Symbol.iterator]`를 찍어보면 `undefined`가 아닌 함수가 출력되는 것을 확인할 수 있다.<br>
따라서 위의 5개 객체는 iterable하다라고 볼 수 있다<br>

### Iteration Protocol
그럼 어떻게 동작 될까?<br>
먼저 `for-of`나 `...`(spread연산자)들이 대표적으로 iterable한 객체를 사용할 때 많이 사용하는데 먼저 `for-of`나 `...`가 실행될 때 해당 객체에서 `[Symbol.iterator]`가 존재하는지 찾는다<br>
이는 순환 가능한지 확인하는 것<br>
 이후 해당 메서드를 실행시키고 반환된 객체에서 next라는 반복자 프로토콜을 반환되는 값중 `done`이 true가 될때까지 반복해서 실행하게 된다
 실제로 이를 직접적으로 만들수 있는데 위에서 말한 iterable한 객체가 아니더라도 직접적으로 [Symbol.iterator]를 추가하여 만들고 반복 프토콜인 `next()`를 구현한 후 value와 done을 순환시키면서 마지막 값 이후부턴 done을 true 되도록 만들면 된다
가장 위의 연습문제 링크를 따라가면 직접 연습한 코드들을 확인 할 수 있다

<br>

## Generator

Gnerator는 Iterable이면서 Iterator인 객체의 특별한 종류인데 이 객체는 일시정지와 재시작 기능을 여러 반환포인트들을 통해 사용할 수 있다.<br>
말로만 봐선 좀 어려운데 실제로 사용방법을 알게 되면 이해할 수 있다<br>
`yield`키워드를 통해 구현할 수 있고 이 키워드는 오직 generator 함수에서만 사용할 수 있다

여기서 중요한 점은 `yield` 키워드라는게 도대체 뭐고 어떻게 동작하냐는 것이다.<br>
먼저 Generator가 iterable이라고 했으니 순환 가능한 놈이란 건 파악할 수 있다.<br>
그럼 이 Generator도 `[Symbol.iterator]`를 가지고 있는것인가? 라고 볼수 있는데 명시적으로 그렇진 한지만 Generator가 Itrator를 품고 있구나라고 생각하면 이해하기 편하다.<br>
generator 함수는 `return`이 사용, 에러 발생, 함수의 끝부분까지 모두 수행 되었을 때와 같이 3가지 경우로 정지되는데 이때 [Symbol.iterator]에서 done이 true가 되는 것과 같다.<br>

실제로 generator함수를 만들어보면 [Symbol.iterator]메서드를 실행할 때와 매우 비슷한 걸 알 수 있는데

```
function* myGenFn(){
    yield 1;
    yield 2;
    return 3
}
const gen = myGenFn() // Object [Generator] {}
gen.next() // {value 1, done: false}
gen.next() // {value 2, done: false}
gen.next() // {value 3, done: true}
```

앞서 iterator를 한번 직접 만들어봤다면 `gen.next()`를 했을 때 gen에 저장되는 값들이 iterator에서 next() 가 실행될 때마다 반환되는 값이라는 것을 파악할 수 있다.<br>
코드를 하나하나 살펴보자면 일단 `myGenFn`이라는 함수는 우리가 원래 함수를 선언할 때와 동일하게 사용되는데 딱 다른점이 하나 있다.<br>
`*`가 function 끝에 붙어 있다. 이게 바로 generator 함수라고 나타내는 놈으로 generator 함수를 작성하고 싶을경우 `*`를 붙여주면 된다.

그럼 이 함수를 실행한 값을 `gen`이란 변수에 할당했는데 이상하게 `return 3`의 `3`이 할당되는 것이 아니라 `Object [Generator] {}`라는 이상한 값이 할당되는 것을 볼 수 있다.<br>
이는 generator함수가 실행할 경우 바로 return까지 코드를 읽어가는 것이 아니기 때문이다.<br>
함수가 실행되면 generator 함수 즉 `myGenFn`은 준비 상태가 된다. 코드를 읽을 준비가 되어 있는 상태로 이 객체는 generator입니다라고 알려주는 값이 할당되는 것이다.<br>

그럼 어떻게 코드를 읽을까? 이는 iterator처럼 `next()` 반복 프로토콜을 실행할경우 코드를 읽기 시작한다.<br>
- `yield`키워드를 만날경우 코드 실행을 정지하고 `yiedl`키워드 뒤에 있는 값을 `value`로 내보내고 `done` false를 반환한다
코드는 정지 순간을 만날때까지 읽기 시작한다. 정지되는 순간들을 살펴보다
- `return`이라면 `done` true와 함께 `value`값으로 `return`된 값을 담아주어 반환한다
- 함수의 코드 끝에 도착한다면 `value` `undefined`와 함께 `done` true를 반환한다
- 에러를 만낫을 때 또한 정지한 후 error를 반환해준다

이처럼 `next`프로토콜을 실행해 줄때만 함수를 쭉 실행하다 정지 순간을 만나면 정지한후 Iterator처럼 value와 `done` 객체를 반환한다.<br>
그리고 함수가 아예 종료될 때 `done` true 를 반환하여 generator를 종료시킨다.<br>

이렇게까지 보고 나니 Generator가 iterator를 품고 있다는 게 확실하게 보인다.<br>
그러면 우리는 `[Symbol.ieterator]`라는 메서드를 generator로 구현할 시 좀더 코드를 줄일 수 있게 된다.<br>
`for`반복문과 같은 반복을 통해 반복할 때마다 `yield`를 통해 코드를 멈추고 반환할 원소를 `yield`뒤에 적어 반환하는 것으로 직접적인 `next`반복 프로토콜을 만들거나 `value`와 `done`를 가진 객체를 반환하는 코드들을 작성하지 않아도 된다


<br>

---
코드를 배우며 iterable하지 않은 객체들을 iterable하게 사용하고 싶은 순간이 많았다.<br>
이번에 iterator와 generator를 배우며 직접적으로 내가 실행 흐름에 간섭할 수 있다는게 확실한 재미가 있는 것 같다.