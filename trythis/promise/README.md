# Promise 와 asncy & await
### [연습코드 - Callback을 Promise로 refactoring](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/promise/callbackPatten.js)
### [연습코드 -  Promise 직접 구현하기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/promise/myPromise.js)
### [연습코드 -  Promise.all 직접 구현하기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/promise/promiseAll.js)
### [연습코드 -  for-await-of 연습](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/promise/for_await_of.js)
## 전통적인 비동기

자바스크립트에서 비동기 프로그래밍은 어떻게 발전됐을까?

1. Callback 
2. Promise
3. Generator
4. Async / Await 


1세대로 Callback이 있는데 2세대인 Promise가 들어오기 전까진 Callback hell이 있었다.<br>
setTimeout 예시가 가장 많은데 말 그래도 중첩해서 콜백을 쌓게 될 경우 setTimeout 딜레이가 3초를 걸어두고 3초뒤 실행할 함수에 또 setTimeout 딜레이 2초를 걸어두고 또 그 함수에... <br>
이런식으로 계속 콜백이 쌓이는 걸 콜백지옥이라고 한다. 코드 깊이도 깊어지고 너무 중첩되어 코딩이 힘들어서 나온게 Promise이다.<br>
then과 catch로 되는 Promise는 이전 콜백지옥때 보던 코드보단 훨씬 좋아진다.

### Promise
Callback pattern의 단점을 극복하기 위해 출현
- 안전하고 유지보수 쉬운 코드 작성이 가능해졌다
- Promise가 Callback을 대체하는 것은 아니다(Promise도 callback 사용)
- 호출 시 Promise instance 반환후 resolve & reject 
  - `pending`상태에서 성공은 resove, 실패는 reject 로 진행
  - Promise instance를 전달할 수 있어 편리하다
- Promise 객체는 성공(fulfiled) 또는 실패(rejected)상태를 갖는다

(pending:진행중 -> fulfiled or rejected -> settled)

예시 코드로 확인
```javascript
const promi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log('fulfill', now));
    else reject(new Error('어디로?'));
  }, 1000);
});

console.log(promi);

promi.then(
  succ => console.log('Resolve!'),
  fail => console.log('Reject!', fail)
);

```

현재 시간에 따라 조건문을 통과해 성공과 실패를 보는데 이땐 `then`하나로 처리했지만 `catch`를 사용한다면 코드상으로도 알맞고 중간에 에러가 나는 부분도 catch가 잡아주기 때문에 catch로 실패처리를 하자
```javascript
const promi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(now);
    else reject(new Error('어디로?'));
  }, 1000);
});

// promi.then(
//  succ => console.log('Resolve!', succ, promi),
//  err => console.log('Reject!', err, promi)
// );

promi
  .then(succ => console.log('Resolve!', succ))
  .catch(err => console.log('Error!!>>', err));
```

이런식으로 관리해주자<br>
물론 `then`을 연속으로 체이닝 할 수 있다. Promise 실행후 또 Promise를 사용할 수 있는 법!<br>

### Promise의 여러 메서드

- Promise.all
  - 여러 Promise Fn을 동시 실행
  - 모두 성공시 시간과 무관하게 **순서 보장!**
  - 하나라도 실패시 바로 catch
  - `Promsie.all(iterables).then().catch(...)`
- Promise.race
  - 여러 Promise Fn 중 **가장 빠른 것 하나만**
  - 하나라도 실패시 바로 catch
  - `Promise.race(iterables).then().catch(...)`
- Promise.any   // ES2020
  - 여러 Promise Fn 중 **제일 빨리 성공한 하나**
  - Promise.any(iterables).then().catch(...)
- Promise.allSettled   // ES2020
  - 여러 Promise Fn가 성공이건 실패건 모두 settled될 때!(실행완료)
  - **순서 보장!**
  - Promise.allSettled(iterables).then().catch(...)

  ### 잘못된 Promise
  
- 함수가 비동기읹지 알고 코딩을하자
  - Promise안에 fetch를 또 한다거나(fetch가 비동기이다)
- Promise 결과 반환
  - 위부 변수를 사용해서 결과를 담아서 하게되면 비동기이기 때문에 비동기가 완료되지 않을채로 코드가 실행되는 오류를 범할 수 있다.<br>
    비동기 완료와 함께 어떤 코드를 실행해야 할 경우 비동기 내부에서 실행시키자
- Promise 오류 처리를 제대로 하자. 반복분이 필요하다면 반복문 또한 `try..catch`문을 잘 사용하여 에러처리를 하자
- Promise내부적으로 `then,catch`를 사용하여 에러처리를 하는데 그 위에 중복하여 `try..catch`를 사용하여 불필요한 코드를 줄이자
- then은 2개의 인수를 가질수 있지만 굳이 사용하지 않고 catch를 통한 에러처리를 하자

>generator를 사용하여 Promise를 실행할 수 있다.<br>
return 에서 value를 통해 접근하여 then을 사용할 경우 가능하다


## async / await (ES 2017)

- Promise를 생성하고 소비하기 위한 문법적 설탕이다
- 비동기 함수에서 콜백을 사용하는 대신 단순한 논리적 흐름을 작성한다
- Promise의 then/catch/finally를 사용할 필요가 없어진다
- async는 Promise를 반환하고 await은 resolve,reject를 매핑한다
- 예외(error)는 거부(reject)고, 거부(reject)는 예외(throw)다
- 반환(성공)은 확정(resolve)이고, 완료(reject)는 결과(result)이다
- **ES2020부터는 최상위 수준 await 사용가능하다**

하지만 병렬 처리시 문제되는 것이 있는데
오직 Promise를 사용하여 코드를 짤 경우 각각이 별도 thread가 실행된다

```javascript
console.time('Promise-then');
afterTime(1).then(res => console.log('11>>', res));
afterTime(2).then(res => console.log('22>>', res));
afterTime(3).then(res => {
  console.log('33>>', res);
  console.timeEnd('Promise-then');
});
```
이 경우 3.x초가 걸리는 반면<br>
async/await으로 작성할 경우 단일thread로 실행되어

```javascript
console.time('async-await');
console.log('11>>', await afterTime(1));
console.log('22>>', await afterTime(2));
console.log('33>>', await afterTime(3));
console.timeEnd('async-await');
```
총 6.x초가 걸리게 된다

여기서 중요한 점을 알 수 있는데 연관이 없는 비동기 함수 실행에 async/await을 남발하지 않는 것이다.<br>
이는 await 자체가 실행을 기다리게 됨으로 꼭 주의해야한다

### 함정
map에서의 실수
- 각각 별도 Promise(thread)로 실행( async는 Promise를 반환한다 )

```javascript
const mapResult = [1, 2, 3].map(async (val) => {
  const r = await afterTime(val);
  console.log(r);
  return r;
});
console.log('mapResult=', mapResult);
```
이경우 `return r`이 있더라도 배열은 Promise로 가득 반환되어 있다

filter에서의 실수 
- 각각이 Promise(thread) 반환. 즉 Never False
```javascript
const odds = [1, 2, 3].filter(async val => {
  const r = await afterTime(val);
  console.log(r);
  return r % 2 === 1;
});
console.log('odds=', odds);
```
이경우 완전 무쓸모 코드가 된다

### 비동기 iterator
이전에 배운 iterator를 비동기로도 작성할 수 있는데
```javascript
function iter(vals) {
  let i = -1;
  return {
    async next() {
      i += 1;
      return { value: await afterTime(vals[i]), done: i >= 3 };
    },
  };
}

const it = iter([1, 2, 3]);
console.time('iter');
console.log('1=', await it.next());
console.log('2=', await it.next());
console.log('3=', await it.next());
console.log('4=', await it.next());
console.timeEnd('iter');
```
이렇게 안쪽에 next 프로토콜을 비동기로 작성할 수도 있다
generator또한 마찬가지다

그래서 ES2018부턴 for-await-of라는게 생겼는데 예시를 보자면

```javascript
const afterTime = sec => new Promise(resolve => setTimeout(resolve, sec * 1000, sec));
console.time('for-await-of');
const arr = [afterTime(1), afterTime(2)];

for (const fo of arr.values()) {
  console.log('fo=', fo);
}

for await (const fao of arr.values()) {
  console.log('fao=', fao);
}

console.timeEnd('for-await-of');
```
이처럼 Promise들도 iterator하게 사용할 수 있게 됐다.(Promise.all이 있긴 하다)