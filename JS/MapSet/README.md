# Map과 Set

### [Map과 Set & 객체 프로퍼티 조작 연습코드 - 회사 직원 데이터 다루기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/mapSet/employee.js)

### [Map Set 연습코드 - 집합 공식 만들어보기(차,합,교)](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/mapSet/intersection.js)

## Map

array에서 사용하던 메서드인 `[].map`이 아닌 자료구조인 Map이 있다<br>
객체는 키가 있는 컬렉션을 저장하고 배열은 순서가 있는 컬렉션을 저장한다. Map은 객체와 비슷하다고 생각할 수 있는데 다른 점이 있다<br>
먼저 단순 객체는

- 프로토타입 체인 문제
- 문자열이나 심볼만 키로 가능, 객체나 비 문자형은 키가 될 수 없다
- 프로퍼티 순서는 보장이 안된다. length나 size도 없다
- 이터레이터를 반환하는 keys,values,etries 란 함수도 없어서 spread도 불가하다
- has, set, get, delete, clear같은 메서드가 없다

만드는 방법으로는

```javascript
new Map(),
  new Map([
    [k1, v1],
    [k2, v2],
  ]);
```

이런식으로 만들며 **키:값으로 키는 객체도 가능한다**<br>
Map을 사용할 때 주의할 것 중 하나는 **Map의 key가 reference type일 경우 GC 대상이 되지 않는다** Map 자체가 항상 참조 하고 있기 때문이다<br>

Map이 좋은 이유로는 일반 객체처럼 단순히 키:값 형식이 아닌 키를 해시값으로 저장하여 메모리에서 한번에 찾아 갈 수 있게 한다.<br>
메모리에서 데이터를 찾을때 주소를 알고 있는 상태니 단번에 찾아갈 수 있어서 훨씬 효율적이다<br>
하지만 Map이란 자료구조를 하나 만드는 것 자체가 메모리에 큰 부담이 있다고 하니 적재적소에 필요할 때 사용하면 매우 효율 적일 것 같다

### Map의 메서드

- `new Map()` : 맵을 만든다
- `map.set(key, value)` : key를 이용해 value를 저장한다
- `map.get(key)` : key에 해당하는 값을 반환한다. key가 존재하지 않으면 undefined를 반환한다
- `map.has(key)` : key가 존재하면 true, 존재하지 않으면 false를 반환한다
- `map.delete(key)` : key에 해당하는 값을 삭제한다
- `map.clear()` : 맵 안의 모든 요소를 제거한다
- `map.size` :요소의 개수를 반환한다.

Map 자체도 이터러블 하지만 각 키와 밸류들을 이터러블 객체를 반환하는 메서드 또한 있다

- `map.keys()` : 각 요소의 키를 모은 반복 간으한(iterable) 객체를 반환한다
- `map.values()` : 각 요소의 값을 모은 이터러블 객체를 반환한다
- `map.entries()` : 요소의 `[키,값]`을 한쌍으로 하는 이터러블 객체를 반환한다(2차원 배열)
- `map.size` : 맵에 몇 개의 값이 있는지 세준다

### WeakMap

```javascript
new WeakMap(),
  new WeakMap([
    [k1, v1],
    [k2, v2],
  ]);
```

Map 만드는 형식은 매우 비슷하지만 **키 : 값, 키는 객체만 가능**하다<br>
Map과 똑같은데 뭐가 다르지? 할 수 있는데 다음과 같은 특징들이 있다

- key는 object만 가능하다
- `key[value]`는 GC 대상
- 이터레이터가 안된다(keys/values/entries method가 없다)
- size 프로퍼티와 clear 메서다그 없다 (clear는 `x = new WeakMap()`식으로 하면 된다)
- 그 외, Map과 동일하다(has, delete)

Map에서 객체를 키로 사용한 경우 `맵`이 메모리에 있다면 객체도 메모리에 계속 남게 되어 해당 객체를 삭제한다 하더라도 GC가 돌지 않는다고 위에서 작성했다<br>
그럼 메모리 관리에서 매우 안좋기 때문에 위크맵은 이와 다른 양상을 보인다.<br>

무조건 객체를 키값으로 받으며 객체가 사라지면 위크맵과 메모리에서 자동으로 삭제된다.<br>
이는 키값으로 단순히 메모리 주소를 값으로 가지고 있기 때문에 딱히 참조하지 않고 있어서 G.C가 도는 것이다<br>
이 경우 그냥 데이터를 뽑아보려 하면 나오지 않고 복사하기도 쉽지 않다. 오로지 메서드를 통해 얻고 넣고 할 수 있다.<br>
이유는 객체의 모든 참조를 잃게 되면 자동적으로 G.C가 돌아서 객체가 사라지는데 동작 시점을 정확히 알 수 없기 때문이다 <br>
따라서 위크맵에 현재 있는 요소가 몇개 있는지 정확히 알 수 없는게 이유기도 하다

사용은 부차적인 데이터를 저장할 곳이 필요할 때나 캐싱이 필요할 때 유용하다

## Set

`셋(Set)`은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다.<br>
저장할 때 Set에 키가 없는 값이 저장된다.<br>

```javascript
new Set(), new Set([v1, v2, v3, …])
```

배열을 넣어서 만드는데, 다만 중복되지 않는 데이터의 집합을 넣어야 한다. 만약 중복 값을 넣을경우 당연히 중복된 개체들은 삭제되고 하나만 남게 된다<br>

### set주요 메서드

- `set.add(value)` : 값을 추가하고 셋 자신을 반환한다
- `set.delete(value)` : 값을 제거한다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true,아니면 false를 반환한다
- `set.has(value)` : 셋 내의 값이 존재하면 true, 아니면 false를 반환한다
- `set.clear()` : 셋을 비운다
- `set.size` : 셋에 몇 개의 값이 있는지 세준다

맵과 똑같이 keys(), values(), entries(), 도 가능한 메서드이다.

Set의 value가 referece type일 경우 GC대상이 안된다.<br>
이는 위에서 나온 Map과 똑같은 이유이며 당연히 같은 생각으로 나온 자료구조가 하나 있다. 이름도 같은 `WeakSet` 이다

### WeakSet

```javascript
new WeakSet(), new WeakSet([hong, kim, …])
```

**값(객체만 가능!)**<br>
value는 GC의 대상이 될 수 있다 즉,set 안의 객체는 참조하는 값에 도달 가능할 때만 메모리에서 유지된다.<br>
이터레이터가 안됨으로 `size,keys()`같은 작업은 당연히 될 수 없다<br>
Set과 유사하지만 객체만 저장할 수 있다는 점이 다르다. 원시값은 저장할 수 없다<br>
WeakMap처럼 지원되는 메서드는 매우 적고 `add,has,delete`정도만 사용할 수 있다

위의 WeakMap과 동일하게 부차적인 데이터를 저장할 때 사용할 수 있다. 다만, WeakSet은 WeakMap처럼 복잡한 데이터를 저장하지는 않고 간단한 답변을 얻는 용도로 사용된다.

WeakMap과 WeakSet 둘 다 큰 단점으론 내부데이터가 얼마나 있는지 확인할 수 없고 반복 작업이 불가능하다는 점이다.<br>
다만 이런 단점들이 WeakMap과 WeakSet을 이용하는 작업들에는 필요치 않아서 방해받진 않는다.<br>
**주로 '추가'데이터를 저장하는 용도로 자주 사용한다!**

---
