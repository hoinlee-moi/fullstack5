# 비동기 프로그래밍

## 동기와 비동기

프로그래밍 할 때 자주 나오는 단어로 동기와 비동기가 있다. 각각 알아보자면

**동기**
- 한번에 하나의 함수만 실행(only 1 Call Stack & Execution Context)
- 즉, 하나의 함수가 실행되는 동안 blocking
- Single Thread in Single Process
- Runtime -> Execution Context -> Execution Context Stack -> Lexical Environement

**비동기**
- 한번에 하나의 함수만 실행
- I/O를 수행하는 비동기 함수는 Background에 넘김(Non-blocking)
- Single Thread But, Multi Process (:BackGround는 OS Process 의존)
- Runtime -> Execution Context -> CallStack-> Background -> OS -> Task Queue -> CallStack

나온 개념중 하나씩 다루자면
- CallStack : 호출 스택으로 실행되는 함수가 등록되는 Stack
- TaskQueue : 태스크 큐로 실행되어야 할 콜백 함수가 대기하는 Queue.
- EventLoop : 이벤트 루프로 TaskQueue에 있는 함수를 차례로 CallStack으로
- Background : 백그라운드로 별도 Process로 I/O처리 후 콜백 함수(in APIs Container)를 TaskQueuefh
- APIs container : 이벤트 리스너를 가지고 있는 컨테이너로 어떠한 이벤트를 읽고 태스크 큐로 콜백 함수를 보내게 된다

여기서 주의할 점은 Javascript의 비동기 프로그래밍은 여러 함수를 한번에 실행하는 것이 아니라는 것이다.<br>
실행컨텍스트를 통해 하나의 컨텍스트만 실행되지만 비동기로 실행되어야 할 때 비동기 함수를 basckground로 넘겨서 실행 컨텍스트를 비우고 다른 함수를 먼저 실행하는 것이다.<br>
그리고 뒤로 넘어간 함수는 어떤 실행 결과를 기다렸다가 돌아와 태스크 큐라는 곳에 저장되는데 이때 이벤트 루프를 통해 **실행컨텍스트**가 비어있다면
다시 실행컨텍스트로 돌아와서 실행된다<br>

큰 범위로 봤을 때 generator(iterator)를 Promise가 감싸고 있고 그걸 async/await 이 감싼 느낌이다 <br>
그래서 제네레이터를 볼 때 next함수를 부르기 이전까지 대기하고 있고 다른 코드들을 이행하다가 next 함수가 실행되면 그때서야 실행되고..<br>
Promise 또한 `then`이 불려지기 전까지 `pending`상태로 기다리다가 시작되고 점점 더 코드를 간편하게 나타내게 된것이라 보면 된다

<br>
<br>

![](https://velog.velcdn.com/images/lee_moi/post/7bac5e21-d234-421b-884f-11b0e38f2e4e/image.png)

<br>

전체적으로 이런 방식인데 `setTimeout`으로 cb1이 백그라운드로 넘어가고 `promise`에 저장된 cb2,cb3도 넘어간다.<br>
하지만 전부 Task Queue로 넘어가는 건 아닌데 비동기 함수들 중에도 우선순위가 따로 정해져있다<br>
그 중엔 `setTimeout`보단 `promise`반환이 우선순위가 더 높다<br>
이때 같은 Queue에 있으면 하나씩 꺼낼때 문제가 생기니 `Micro Task Queue`라는 Queue를 통해 우선순위를 나눠서 진행된다<br>









