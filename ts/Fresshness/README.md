# Freshness

처음들었을 때 매우 생소한 개념이었다. <br>
비유를 통해 듣는 설명으로는 밭에서 막뽑은 채소는 흙과 이물질이 가득있기에 우리가 먹기 위해선 한번 닦아내는 과정이 있어야 한다<br>
매우 신선하기 때문에 바로 먹을 수 없다는 의미로 설명해 주셨는데 일단 비유를 기억하고 개념을 살펴보면 이해되는 게 더 쉽다<br>

Typescript는 구조적으로 타입 호환성이 있는 객체 리터럴의 타입 검사를 쉽게 할 수 있도록 신선도(Freshness)라는 개념을 제공하는데 이를 다른 말로는 엄격한 객체 리터럴 검사라고도 부른다

구조적 타입 처리를 예시로 살펴보면

```javascript
function logName(something: { name: string }) {
  console.log(something.name);
}

const person = { name: "matt", job: "being awesome" };
const animal = { name: "cow", diet: "vegan, but has milk of own species" };
const random = { note: "I don't have a name property" };

logName(person); // OK!
logName(animal); // OK!
logName(random); // error : name 누락!
```

하지만, 구조적 타입 처리는 무언가가 실제 다루는 것보다 더 많은 데이터를 받아들이는 즉, 초과 속성 프로퍼티 검사가 있다

```javascript
function logName(something: { name: string }) {
  console.log(something.name);
}
logName({ name: "matt" }); // OK!
logName({ name: "matt", job: "being awesome" }); // error : 객체 리터럴은 정의된 속성만 지정
```

다만 이 오류는 객체 리터럴을 사용한 경우에만 발생한다<br>
만약 이런 오류가 발생하지 않는다면 실제 코드를 보는 사람은 logName이 객체 프로퍼티인 `job`에도 무언가 처리한다 예상할 수 있다(실제로는 아무일도 하지 않는다)<br>
또는 옵셔널 프로퍼티가 있을 경우 앞서 설명한 객체 리터럴 검사가 없다면 오타가 있어도 타입 검사가 그냥 통과될 것이기도 하다! <br>
그렇기에 필요하다

**혹시 어떤 추가적인 속성을 받아야 할 지 모를 때(특히 오픈 API에서 받을 때 사용되곤 한다) 인덱스 시그니처를 사용함으로 명시적으로 나타낼 수 있다**

## 신선도(Freshness)개념과 Fresh Literal

Typescript는 구조적 서브타이핑에 기반한 타입호환의 예외 조건과 관련해서 신선도(Freshness)라는 개념을 제공하는데 모든 object literal은 초기에 "fresh"하다고 간주되며, 타입 단언(type assertion)을 하거나, 타입 추론에 의해 object literal의 타입이 확장되면 freshness가 사라진다.<br>
특정 변수에 object literal을 할당하는 경우 이 2가지중 하나가 발생해서 freshness가 사라지게 되며 함수에 인자로 object literal을 바로 전달하는 겨우 fresh한 상태로 전달되는 것이다.

그런데 typescript는 fresh object일 경우 왜 예외적으로 타입 호환을 허용하지 않기로 했을까?

```javascript
const calorie1 = calculateCalorie({
  protein: 29,
  carbohydrates: 48,
  fat: 13,
  burgerBrand: "버거킹",
});
// 코드를 읽는 다른 개발자가 calculateCalorie 함수가 burgerBrand를 사용한다고 오해할 수 있다

const calorie2 = calculateCalorie({
  protein: 29,
  carbohydrates: 48,
  fat: 13,
  brigerBrand: "버거킹",
});
// birgerBrand라는 오타가 발생하더라도 excess property이기 때문에 호환에 의해 오류가 발생 하지 않는다
```

이러한 부작용들로 fresh object인 경우 타입호환을 허용하지 않기로 논의된 것이다.<br>
구조적 서브 타이핑에 기반한 타입 호환은 유연함을 제공한다는 이점은 있지만 위와 같은 부작용이 있을 수 있다.

fresh object를 함수에 인자로 전달할 경우, 이는 특정한 변수에 할당되지 않았으므로 해당 함수에서만 사용되고 다른 곳에선 사용되지 않는다.<br>
이 경우 유연함에 대한 이점보다는 부작용을 발생시킬 가능성이 높으니 굳이 주조적 서브 타이핑을 지원해야 할 이유가 없는것이다<br>

---
따라서 우리는 프로젝트에 맞춰 `index signature, tsconfig조정, supperssExcessPropertyErrors, branded type` 등을 통해 타입 호환성 범위를 선택하여 개발하면 된다

**정리**
- 타입 검사의 안정성과 유연함 사이에서 절충안으로 도입된 개념이 타입 호환성. 그리고 타입 호환성을 지원하는 방법과 관련하여 개발자에게 명시적 선언을 어디까지 요구할 것인지 선택지가 존재
- Typescript는 구조적 서브 타이핑에 기반한 탕비 호환을 통해 개발자의 명시적 선언을 줄여주는 한편 이로 인한 부작용을 개선하고자 freshness에 기반한 예외 조건을 두었고, index Signature오 Branded type등의 방식을 통해 개발자가 명시적으로 성택할 수 있는 선택지를 만듬
- 프로그래밍 언어마다 타입 검사가 동작하는 방식이 다르며 이는 해당 언어를 개발한 커뮤니티의 논의와 의사결정에 따라 선택된 결과이다.