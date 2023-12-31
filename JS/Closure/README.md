### [Closure 연습 코드 - billPrint(영수증 출력)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Closure/billPrint.js)

### [Closure 연습 코드 - count(입장인원 카운트)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Closure/currentCount.js)

### [Memoized 연습코드 - fibonach(피보나치)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Recursive/fibonachi%26memoized.js#L52)

### [Memoized 연습코드 - keyPair(키페어)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/Array/keyPair.js#L35)

## 클로저

우리가 실행컨텍스트를 배웠다면 클로저는 이해하기 쉽다.

```javascript
function f1() {
  let i = 0;
  return function () {
    i += 1;
    console.log(i);
  };
}

const ff = f1();
ff(); //1
ff(); //2
ff(); //3
```

이처럼 함수에 리턴되는 함수를 만들고 리턴된 함수를 다른 변수에 담아 사용한다면 참조되는 Environment Record가 삭제되지 않고 남아있다는 건데 이렇게 말하면 이해하기 힘들 것 같긴 하다.

하지만 실행컨텍스트를 생각한다면 금방 이해된는데 차근차근 봐보자

- 전역 코드 평가
  가장 먼저 전역 코드가 평가 되는데 이때 전역 코드속에서 호이스팅될 문들을 찾아야하는데 먼저
  - `f1` 함수가 전역 함수로 선언되어 있기 때문에 <f.o>에 올라가게 된다.
  - `ff` 변수가 `const` 선언문으로인해 Declarative Environment Record에 `UIY`으로 올라간다
- 전역 코드 실행
  더이상 평가 될 것이 없으니 이제 코드가 실행돼야 하는데 앞에 있는 `f1`함수는 function 선언문이니 실행할 것은 아니니 넘어간다
  - `const ff = f1()`문을 할당해줘야 하기 때문에 `f1`함수를 `()`실행한다.
- `f1`함수 실행
  `f1`함수가 실행되었으니 이제 ECS에 `f1`함수 컨텍스트 스택이 올라가게 되고 `f1`의 레코드 가 만들어진다.
- `f1`함수 평가
  - `let i`가 있으니 `i`를 `f1`함수 실행 환경 레코드에 올리고 return은 실행시 반환될 것이니 아직 대기한다
- `f1`함수 실행
  - `let i=0`을 통해 `i`에 0을 할당하고 return문을 실행한다
  - return문을 실행하며 함수가 반환되기 때문에 return문에 적힌 익명함수를 <f.o>에 올린다
  - 익명함수를 return한다
- `f1`함수 종료 -> 전역 실행으로 돌아감
  `f1`함수가 종료되면서 실행 컨텍스트는 pop되고 `f1`함수가 return한 익명함수는 `const ff = f1();`를 통해 `ff`라는 변수에 할당된다
  - 이때 원래라면 `f1`의 함수가 실행 컨텍스트 스택에서 pop 될 때 `f1`함수가 스택에 올라오며 생성된 Record는 더이상 참조되지 않으니 사라져야 하는게 맞다
  - 하지만 이 Record는 살아있는데 이는 아까 `f1`함수가 실행되며 return하게된 익명함수가 전역에 있는 `ff`란 변수를 통해 참조되고 있고 그 익명함수의 `[[Envrionment]]`(함수가 <f.o>를 생성할 당시의 envrecord이기 때문에 `f1`함수가 실행되며 생성되었다)가 `f1`의 레코드를 참조하고 있기 때문에 G.C가 돌지 않아 계속해서 살아남아 있는 것이다
- 그렇기에 그뒤에 실행되는 `ff()`는 그 <f.o>에 생성된 익명함수를 실행시키는 것이고 그 익명함수는 `f1`함수의 레코드를 `[[Environment]]`를 통해 참조하고 있으니 `f1`함수의 레코드에서 `i`를 찾아 연산하고 반환하게 되는 것이다

이렇게 단순히 함수가 함수를 반환하는 것이 클로저가 아니라 이런 Function Object가 생성될 당시의 참조 Record등을 생각해서 이 Record 참조가 계속 유지 되는 것이 클로저이다.

- 외부 함수를 참조하는 내부 함수(스코프 사슬에 접근) - 안토 아라빈스, 스리칸스 마치리주(Functional Javascript, 2020)
- 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 것 - 이선 브라운(러닝 자바스크립트, 2017)
- 로컬 변수를 참조하고 있는 함수 내의 함수 - 야마다 요시히로(자바스크립트 마스터 북, 2017)
- 자신이 생성될 때의 스코프에서 알 수 있었던 변수들 중 언젠가 자신이 실행될 때 사용할 변수들만을 기억하여 유지시키는 함수 - 유인동(함수형 자바스크립트 프로그래밍, 2017)
- 함수 선언 시 만들어지는 유효범위가 사라진 후에도 호출할 수 있는 함수 - 베어 바이볼트,존 레식(자바스크립트 닌자 비급, 2014)
- 이미 생명 주기상 끝난 외부 함수의 변수를 참조하는 함수 - 송형주,고현준(인사이드 자바스크립트, 2014)
- 자유변수가 있는 함수와 자유변수를 알 수 있는 환경의 결합 - 에릭 프리먼(헤드퍼스트자바스크립트, 2012)
- 자신을 내포하는 함수의 컨텍스트에 접근할 수 있는 함수 - 더글라스 크록포드(자바스크립트 핵심 가이드, 2008)

각 책들에서 나오는 클로저에 대한 내용인데 한번 읽어보면 좋다

## 메모이제이션

그럼 이 클로저를 이용해 어떤 걸 활용할 수 있냐면... 우리가 React를 배울 때 많이 했던 memoization 기능을 활용할 수 있다.

만약 우리가 클로저를 활용해 어떠한 값을 레코드 참조로 기억해두고 있다면 만약 다시 실행했을 때 그 값이 있거나 이미 실행했었다면 굳이 다시 코드를 전부 실행하는 것이 아닌 클로저 된 환경에서 해당 값을 찾으면 되는 것이다

메모이제이션 즉 메모하기, 기억해두는 것이다

```javascript
const forFibonachi = () => {
  const arr = [0, 1];

  return (k) => {
    if (arr.length > k) return arr.slice(0, k + 1);
    for (let i = arr.length; i <= k; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr;
  };
};
const fibo = forFibonachi();
```

피보나치 수열을 메모이제이션 하는 것인데
`forFibonachi`가 return하는 함수가 있고 return되는 익명함수에 `arr`을 클로저 시켜 저장하도록 했다<br>
return된 익명함수는 피보나치 수열을 동작하지만 만약 내가 이미 한번 실행했던 피보나치 수열의 위치라면 `for`반복문을 실행하지 않고 `slice`를 활용해 해당 위치까지의 피보나치 수열을 반환한다.<br>

고로 똑같은 값을 2번 실행하면 1번째는 반복문을 똑같이 실행하겠지만 2번째는 반복문을 실행하지도 않고 바로 답을 반환하여 시간,메모리 모두를 아낄 수 있다<br>
