## 실행컨텍스트 그려보기
```javascript
const arr = [];
function f2() {
  function Bee() {   // Bee = function() { conso…}
    console.log('f2.Bee');   // → return i;
  }
  let z = 0;
  for (let i = 0; i < 2; i += 1) {
    const x = i + 1;
    z = 1;
    function Bee() {   // 실행시 <f.o>로 인정! Bee = function() { return i; }
      return i;
    }
    arr.push(Bee);
    console.log(i, Bee()); // 0, 0
  }

  console.log(arr[0] === arr[1], arr[1] === Bee, z); // false, true, 1
  console.log('f2>>', Bee()); // 1
}
f2();
```
직접 drow.io를 통해 그렸고 전역 평가부터 시작해서 쭉 `f2()`까지 이어진다
![](https://velog.velcdn.com/images/lee_moi/post/ffdebe32-d8e9-4946-a6ec-ff6b132555a1/image.png)

- Global Object 가 먼저 생성된다
- 전역 평가시 ECS에 GEC(글로벌 실행 컨텍스트)가 올라간다
- GEC 실행을 통해 GER(글로벌 환경 레코드)가 생성된다
- 각 내장 필드 등을 통해 DeclarativeRecord와 BindingObject가 만들어지고 참조한다

![](https://velog.velcdn.com/images/lee_moi/post/ba79d8e8-2aea-4f2b-b40d-b755c5b354f8/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/086fa30d-5fc8-415f-968b-5e6474870112/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/b5e5388b-570e-459e-a467-56cfb607439e/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/c5d7c9dc-6fce-4ff6-b2f0-04330a5747ec/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/66f4a7e1-846d-4977-af31-e3354b9f1d74/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/ba07b065-a2f2-47e7-9c37-fdc05f29629e/image.png)
![](https://velog.velcdn.com/images/lee_moi/post/0f6ad453-c557-4516-aa40-144b256348cf/image.png)


어렵긴 하겠지만 하나씩 살펴보다보면 이해하게 되니 여러번 살펴보자
