# 실행컨텍스트

이전에도 블로그에서 쓴 적 있었지만 그건 면접을 대비 하기 위해 그냥 내용을 외운 것밖에 아니었지만 이번에 확실하게 실행컨텍스트를 이해할 수 있게 되었다<br>

물론 딥다이브 책도 봤지만 성호님 수업을 들으면서 ECMA에 기재된 현 버전의 실행컨텍스트를 새롭게 배울 수 있었고 정말 javascript에 대한 이해가 많이 높아지는 공부였다<br>
먼저 연산자등 js 사용법을 안 상태에서 개념적인 부분이 들어오니 앞서 배운 것들이 확 이해가 올라오면서 수업 자체가 엄청 재밋는 상태다<br>

그럼 내가 이해한 실행 컨텍스트를 하나씩 확인해보자


## 스코프
개념은 각 식별자들의 유효 범위 이다. 범위로는
- Global
- Function
- Block Scope

이렇게 3가지가 있는데 각 스코프별로 Lexical Enviroment가 생성된다
-> 아마 이 내용이 딥 다이브에 있었는데 최근 문서들을 살펴보면 언급되는 부분이 없다고 한다.<br>
직접 그림을 그려보면 확실히 Lexical Enviroment가 하는일이... 없다<br>
그냥 중개 역할을 하는 것 처럼 보이는데 Enviroment Record 라는 곳에도 참조(OtuerEnviroment)가 생기면서 그냥 동일한 역할을 한다.

이 스코프들에서도 또 2가지 동작 방식이 있는데 정의된 위치를 찾는 것은 `Static scope`라고 하고 어디서 호출됐는지, 호출된 시간을 기반으로 찾느것이 `Dynamic scope`이다<br>
이를 통해 변수와 함수가 어떤 스코프로 동작하는지 알 수 있는데

```javascript
var x = 3
function foo(){
    console.log(x)
    var x =2
    console.log("global foo")
}
function bar(){
    function foo() {
        console.log('local foo')
    }
    foo()
}
foo()
bar()
```

이를 살펴볼 때 `foo`함수가 실행될 때 안에 있는 `console.log(x)`는 무엇이 출력될까?<br>
**정답은 `undfined`가 출력된다**<br>
분명 전역에서 `var x = 3;` 을 통해서 `x`라는 변수를 선언 해 뒀는데 왜 `x`를 출력하면 `3`이 아니라 `undefined`가 나오는 걸까??<br>
이유는 `foo`라는 함수 스코프 안에서 `var x =2`라는 문 때문에 `foo`함수 스코프 안에서의 `x`가 호이스팅 되었기에 `undfined`가 나온것이다.<br>
그럼 이걸 통해 '아 **변수는 Dynamic scope를가지고 있구나를 알 수 있다.**

처음 이 변수가 만들어진 스코프에서 가져오는 것(`var x = 3`이 전역 스코프에서 만들어졌기에 `x`는 전역 스코프에 있지만)이 아니라 가장 가까운 스코프부터 찾아나가는 것이다.<br>
`console.log(x)`가 불린 위치가 `foo`함수 스코프 안이기 때문에 `foo`함수 스코프부터 탐색을 시작했고 호이스팅 된 `var x = undefined;`를 먼저 찾았기 때문에 `undefined`가 출력된 것이다.

하지만 함수는 다르다.

마지막에 실행된 `foo()`와 `bar`함수안의 `foo()`는 각각 누가 실행될까?

전역에서 실행된 `foo()`는 전역의 `foo`함수가 실행되고 `bar`함수 안의 `foo()`실행은 `bar`안의 함수 `foo`가 실행된다.

'??그럼 함수 스코프 안의 foo가 함수 안을 실행했으니 Dynamic 아닌가요?'
라고 생각할 수 있지만 전혀 아니다.<br>
함수는 Static scope로 자신이 만들어진 즉 정의된 위치를 기반으로 스코프를 검색한다.

전역에서 실행한 `foo`는 전역에서 `function foo`를 통해 함수오브젝트에 등록된 순간의 `foo`이고 `bar`안의 `foo`는 `bar`라는 함수가 실행된 순간에 함수 오브젝트에서 등록된 순간의 `foo`이다. <br>
엄연히 둘은 다른 `foo`라는 함수이며 참조하고 있는 `Environment`즉 환경이 다르다.<br>
`bar`안에서 선언된 `foo`라는 함수는 `bar`함수가 종료된다면 더이상 참조되고 있는 환경이 없기 때문에 G.C를 통해 소멸된다.


## Global Object(전역 객체)
실행 컨텍스트에서 항상 등장하는 놈으로 많이 나오는 객체로 JS engine process가 생성(시작)할 때 가장 만저 생성된다.<br>
즉 전역객체는 엔진 프로세스가 종료 되기 전까진 끝까지 살아있는 객체인 것을 알 수가 있다.

구성요소들로는
- BuiltIn(standard) properties & functions 
  - Built-in properties : Infinity, NaN, undefined 등 
  - Built-in functions : eval, isInifite, isNaN, parseInt, parseFloat 등
- host object(brower, node API) 및 var/fn object도 보유한다
- **전역 변수는 전역 객체에 영원히 존재** -> 이는 메모리 낭비와 가독성을 떨어뜨리고 모듈의 namespace를 오염시킬 수도 있으니 전역은 항상 자제하자. 매번 클린코드 얘기가 나올 때 전역 변수를 최소하 하자는 얘기가 괜히 있는 것은 아니다.
- 직접 생성(컨트롤) 하지 못하고, window(globalThis) 키워드 생략 가능
- const/let 은 전역 객체가 아닌 Declarative Environment Record라는 곳에 별도로 생성된다
- 선언이 없는 식별자는 암묵적으로 전역으로 전역객체에 등록된다

```javascript
ig = 1;
console.log(window.ig) // 1
console.log(global.ig)//1
```


Declarative Environment Record에 는 하단에서 Environment Record 부분을 다루면서 정리할 예정이니 일단 `const`/`let` 은 Declarative Environment Record 라는 곳에 생성되는 구나 하고 이해하고 있자

## Execution Context (실행 컨텍스트)

그럼 앞서 스코프와 전역 객체에 대해 배웟으니 대망의 실행 컨텍스트 부분을 살펴보자

### 실행 컨텍스트를 생성하는 code들
기본적으로 **전역 코드, 함수 코드, eval코드, module 코드는 각각의 실행 컨텍스트를 생성한다**
이들이 CallStack에 생성됨으로 이를 'Execution Context Stack' ECS라 부른다

> LexicalEnvironment(렉시컬 환경)<br>
현재 많은 책에서 렉시컬 환경에 대해 서술하고 있지만 v8엔진 이후로 tc39랑 찾아보면 LexicalEnvironment에 대한 얘기가 더이상 등장하지 않는다.<br>
Environment Record 내장 슬롯으로 `[[OutEnv]]`라는 이전 렉시컬 환경에서 사용하던 `OuterEnvironmentReference`가 대체 되는 부분이 나왔기 때문 아닌가 싶다.<br>
실제로 Record에 기록된 변수를 찾아 올라갈 때 각 환경의 Record에서 바로 상위 Record로 갈 수 있는 `[[OutEnv]]`가 있음으로 굳이 렉시컬 환경을 통해 돌아 돌아 갈 필요가 없어졌기 때문 아닐까 싶다.

## Environment Record
그럼 실행 컨텍스트가 콜스택에 올라가 생성되는 Envrionment Record들에 대해 살펴보자.<br>
Envrionment Record는 실행 컨텍스트 스택 즉 ECS에 실행 컨텍스트가 올라올 경우 생성된다.<br>
이건 Global 또한 마찬가지다

### Global Environment Record(inner-field)

많은 내장 슬롯이 있지만 알아 두어야 할 것만 한번 살펴보려 한다.

- [[ObjectRecord]] : global built-in bindings, FunctionDeclaration, asyncFunctionDeclaration 등과 같이 전역적으로 필요한 것들이 포함된 전역 객체를 참조한다 
- [[DeclarativeRecord]] : const / let 로 선언된 식별자들이 들어간다 생각하면 편하다
- [[GlobalThisValue]] : GlobalObject pointer 즉 전역 스코프의 this가 반환하는 값이다(Global Object)
- [[VarNames]] : 식별자 List로 함수(Function, Generator, AsyncFunction, AsyncGenerator) 또는 변수 선언에 바인딩된 문자열 리스트이다
- **[[OuterEnv]]** : null

등이 있는데 OuterEnv는 외부 Environment Record에 대한 참조이지만 전역은 자신 위로 아무도 없고 스스로가 최상위이기 때문에 `null`을 가지고 있다

### Function(class) Object
함수가 만들어질 때 Function Object라는 곳에 함수의 코드들과 참조하고 있는 위치를 알려주는 트리들이 생성되는데 이 Function Object에서 이 코드들을 보관하게 된다.<br>
물론 실행을 위한 평가 같은 것들이 진행된 상태는 아니다

총 15개의 슬롯을 가지고 있지만 우리가 실행 컨텍스트를 배우는데에 가장 중요한 것은
**`[[Environment]]`** 이 하나이다

**이 `[[Environment]]` 는 Function Object를 생성할 당시의 Envrionment Record에 대한 참조를 가지고 있다**

가장 위에서 다룬 스코프 부분에서 x의 값이 찍히는 부분이나 함수 실행 부분이 다른 이유가 이 `[[Environment]]` 때문이니 매우 중요한 부분이다

### FunctionEnvironmentRecord (inner slot)
JS는 함수형 프로그래밍 언어로 가장 많이 보게될 실행 컨텍스트라고 생각한다. 가지고 있는 내장 슬롯들이 많은데 하나씩 살펴보자

- `[[FunctionObject]]` : FunctionObject에 대한 참조를 가진다. 즉, 나의 <f.o>(function object)에 대한 참조이다
- `[[NewTarget]]` : 생성자 함수( new Array 같은 것)로 호출한 경우(클래스인 경우 포함) Function Object에 대한 참조이다. 아니라면 `undefined`
- `[[ThisValue]]` : 함수 호출할 때 사용되는 this 값으로 this를 바인딩 하지 않으면 Global Ojbect를 참조한다. (ex. `fn.call({id:1}) 일 때 fn()함수 내의 this는 {id:1}`)
- `[[ThisBindingStatus]]` : 값이 lexical이면 이 함수는 arraow function이며, local this를 갖지 않는다. lexical이 아니라면 uninitialized 상태였다가 `[[ThisValue]]`값이 set되면 initialized 상태로 변경된다
- `[[OuterEnv]]` : Function Object의 `[[Environment]]` 내부 슬롯이 참조하는 값. 즉, <f.o>가 생성될 당시의 Lexical Scope

[직접 그려본 실행컨텍스트](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/ExecutionContext/README(drawing_Execution_Context).md)

