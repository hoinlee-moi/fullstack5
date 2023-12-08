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

여기서 주의할 점은 Javascript의 비동기 프로그래밍은 여러 함수를 한번에 실행하는 것이 아니라는 것이다.<br>
실행컨텍스트를 통해 하나의 컨텍스트만 실행되지만 비동기로 실행되어야 할 때 비동기 함수를 basckground로 넘겨서 실행 컨텍스트를 비우고
다른 함수를 먼저 실행하는 것이다.<br>
그리고 뒤로 넘어간 함수는 어떤 실행 결과를 기다렸다가 돌아와 태스크 큐라는 곳에 저장되는데 이때 이벤트 루프를 통해 **실행컨텍스트**가 비어있다면
다시 실행컨텍스트로 돌아와서 실행된다<br>
