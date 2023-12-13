# Class와 OOP

## [연습문제 - ArrayList,stack,queue 자료구조 직접 구현하기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/utils/collection.js)

## [연습문제 - 지하철 2호선 class로 만들기](https://github.com/hoinlee-moi/fullstack5/blob/main/trythis/class/subway.js)

OOP란 Object Oriented Programming 으로 객체 지향 프로그래밍이라고 한다.<br>
원시 타입을 제외한 모든 것이 객체로 JS에선 함수도 객체인데 실제로 증명을 해보자면

```javascript
function f() {
  //...some code
}
console.log(typeof f); // 'function'
console.log(f instanceof Object); // true
```

코드를 보면 함수선언된 `f`를 `typeof`를 통해 타입 체크를 할 경우 `'function'`이라고 뜨지만 `instanceof`를 사용해서 `Object`라는 객체 프로토타입 체인 어딘가 존재하는지 판별하는데 `true`가 나온다.<br>
즉, 함수또한 `Object`이라고 할 수 있다.<br>
여기서 할 수 있는건 JS가 함수형 프로그래밍 언어라고 햇는데 전부 객체면 객체지향 프로그래밍 언어인가? 할수 있지만 정확히는 Prototype 기반 객체지향 프로그래밍 언어 이다.<br>
(class는 cunstructor function이고 function은 Object!)<br>
객체는 데이터와 기능의논리적 묶음이라고 보며 property는 instance별로 EnvRec에 생성되고, method는 prototype에 할당되어 모든 instance가 동일한 `<f.o>`를 참조한다.<br>
특정 인스턴스에 묶이지 않는 함수는 클래스(정적-static)메소드라고 한다.

```javascript
class Dog{
    dog={
        name;
        age;
    }
    constructor(name,age){
        this.dog.name = namge;
        this.dog.age = age;
    }
    bark(){
        console.log('bark!')
    }
}
const lucyA = new Dog('lucy',10);
const lucyB = new Dog('lucy',10);

console.log(lucyA.dog===lucyB.dog) // false
console.log(lucyA.bark===lucyB.bark) // true

```

보다싶이 같은 클래스로 만들어진 `lucyA`와 `lucyB`를 저장되는 `name`과 `age`까지 동일하게 작성했다.<br>
실제론 `lucyA.dog.name===lucyB.dog.name`이렇게 내부의 값을 비교한다면 똑같다고 뜨겠지만 각각의 객체 참조 주소는 같지 않은 것을 볼 수 있다<br>
즉, 각각의 instance별로 EnvRec에 따로 생성된다는 것을 볼 수 있고 `method`는 `lucyA`나 `lucyB`의 `bark`는 둘 다 동일한 것을 보면 모든 `instance`가 동일한 `<f.o>`를 참조한다고 볼 수 있다

## prototype과 instance

먼저 Prototype Link와 Prototype Object라는 것이 존재하는데 이 둘을 통틀어 Prototype이라고 부른다.<br>
객체는 언제나 함수(Function)로 생성된다. 우리가 일반적으로 사용하는 `const obj ={}`도 실제론 내부적으론 `const obj = ndw Object()`와 같은 것이다.<br>
함수가 정의될 때는 2가지 일이 동시에 이루어지는데

1. 해당 함수에 Constructor(생성자) 자격 부여
   Constructor 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있게 된다. 그렇기에 함수만 new키워드를 사용할 수 있는 이유다.
2. 해당 함수의 Prototype Object 생성 및 연결
   함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성되는데 `function f(){}`에 `prototype`이 있고 `prototype`은 `f Prototype Object`와 연결되어 있고 `f Prototype Object`에는 `constructor`가 있으며 `fucntion f(){}`와 연결되어 있다

즉, 생성된 함수는 prototype이라는 속성을 통해 Prototype Object에 접근할 수 있고 **Prototype Object는 일반적인 객체와 같으며 기본적인 속성으로 constructor와 **protot**를 가지고 있는것이다**<br>
constructor 생성자는 Prototype Object와 같이 생성되었던 함수를 가리키고 있고
**proto**는 Prototype Link이다

```javascript
function f() {}

f.prototype.a = 2;
f.prototype.b = "aa";
```

위처럼 Prototype Object는 일반적인 객체기 때문에 속성을 추가/삭제 할 수 있으며 f로 생성된 객체들은 f의 prototype을 참조할 수 있게 된다

위의 함수 `f`를 `new`를 통해 만들어보자

```javascript
const obj1 = new f();
const obj2 = new f();
console.log(obj1.a); // 2
console.log(obj2.b); // 'aa'
```

`obj1`이나 `obj2` 둘 다 따로 속성을 넣지 않았는데 `a`와 `b` 실행 가능한 것을 볼 수 있다.<br>
Prototype Object 에 존재하는 `a`,`b`의 속성을 참조한 것인데 어떻게 가능할까??<br>

이건 딱 하나의 속성 `__proto__`가 있기 때문이다<br>
prototype 속성은 오로지 '함수'만 가지고 있던 것과는 달리 `__proto__`속성은 모든 객체가 빠짐없이 가지고 있는 속성이다.<br>
`__proto__`는 객체가 생성될 때 조상이었떤 함수의 Prototype Object를 가리킨다

그래서 `obj1`과 `obj2`는 `f`함수로부터 생성되었으니 `f` 함수의 Prototype Object를 가리키고 있는것이다<br>
여기서 주의할 것은 `obj1`과 `obj2`는 함수가 아닌 인스턴스이고 그래서 prototype 자체가 없다

### **proto**

직접 한번 살펴보면 `obj1`과 `obj2`는 `f` 함수의 Prototype Object를 가리키고 있다<br>
각각 `obj1`과 `obj2`에서 `a`나 `b`를 찾을때까지 상위 프로토타입을 탐색하는데 최상위인 Global까지 도달햇는데도 찾지 못한다면 그때서야`undefined`를 리턴한다

**이렇게 **proto** 속성을 통해 상위 프로토타입과 연결되어 있는 형태를 프로토타입 체인 이라고 부른다**

이런 프로토타입 체인 구조 때문에 모든 개쳋는 Object의 자식이라 부르고 Object Prototype Object에 있는 모든 속성을 사용할 수 있게 된다.

**toString함수는 아무 변수에서 바로 toString()함수를 적용하면 문자열을 얻을 수 있는데 이것이 바로 체이닝 때문이다**

## OOP

OOP에서 나오는 개념중 4가지가 있는데 **은닉성**,**상속성**,**다형성**,**추상화** 이다<br>
간단하게 살펴보자면<br><br>

### 추상화

- 공통의 속성이나 기능을 묶어 이름을 붙이는 것
- 예시로 물고기, 사자 , 토끼 , 뱀이 있을 때 각각의 객체이지만 이 객체들을 하나로 묶으려 할때 동물 또는 생물이라는 추상적인 객체로 크게 정의한다.<br>
  이때 동물 또는 생물이라고 묶는 것을 추상화라고 한다.<br>
  즉, 객체에서 공통된 속성과 행위를 추출하는 것
- 핵심적인 특징들에만 집중함으로써, 복잡도를 관리할 수 있도록 한다. 주의할 점은 추상화는 문제 영역과 관점에 의존적이라는 것이다.<br>
  그래서 어떤 영역에서 중요한 것이 다른 영역에서 그렇지 않을 수 있다

### 캡슐화

- 실제로 구현되는 부분을 외부에 드러나지 않도록 캡슐로 감싸 이용법만 알려주는 것이다
- 데이터 구조와 데이터를 다루는 방법들을 결합시켜 묶는 것. 변수와 함수를 하나로 묶는 것을 말한다
- 하지만 무작정 한군데 묶는 것이 아닌 객체가 맡은 역할을 수행하기 위한 하나의 목적을 묶는다고 생각해야한다
- 또 데이터를 절대로 외부에서 직접 접근 하면 안되고 오로지 함수를 통해서만 접근해야 하는데 이걸 가능하게 하는 것이 캡슐화이다

### 은닉화

- 은닉이란 내부 데이터, 내부 연산을 외부에서 접근하지 못하도록 은닉(hiding)혹은 격리(isolation)시키는 것
- 변수에 접근 지정자를 private로 지정한다
- setter, getter를 사용해 변수의 접근, 제어한다

캡슐화보다 비교적 구체적인 개념이고 캡슐화의 한 개념으로 객체 외부에서 객체 내의 자료로의 접근을 제한하고 데이터를 수정, 조작하는 동작은 내부에 두고 접근(getter),설정(setter)하는 메소드로 결과만 받는 것이다.<br>
은닉화는 중요사항이 밖으로 드러나지 않도록 감춰야한다<br>
캡슐화는 중요사항을 감춘 상태에서 외부에 그것을 사용할 수 있는 방법을 설정하고 외부와 직접적으로 의사소통을 의미한다.

### 상속성, 재사용(Inheritance)

- 상위 개념의 특징을 하위 개념이 물려받는 것
- 객체지향의 하이라이트 부분이라고 생각한다. 상속이란 개념이 없으면 객체지향이나 절차지향이나 같아지게 된다
- 예시로 자동차라는 부모 클래스가 있으며 스포츠카를 자동차에서 생성한다. 그럼 자동차의 특징을 전부 물려받으며 스포츠카만의 특징또한 가지게 된다
- 이로인해 재상용으로 코드도 줄어들고 범용성이 늘어난다

### 다형성(Polymorphism)

- 부모 클래스에서 물려받은 가상 함수를 자식 클래스 내에서 오버라이딩 되어 사용되는 것

메소드 오버라이딩 오버로딩도 다형성의 일부분이라 보면 좋다!

## 정적 메서드와 정적 프로퍼티

`prototype`이 아닌 클래스 함수 자체에 메서드를 설정할 수 있는데 이런 메서드를 정적(static)메서드라고 부른다<br>
정적 메서드는 클래스 안에 `static` 키워드를 붙여 만든다

```javascript
class User {
  static method() {
    alert(this === User);
  }
}
User.staticMethod(); //true
```

여기서 주의해야 할 것은 정적 메서드와 정적 프로퍼티는 인스턴스에 생기는 것이 아닌 각각의 클래스 자체에 만드는 것이다.<br>
때문에 호출할 때도 클래스를 통해 호출해야 한다. 고로 `this`도 그 클래스 자체가 돼다 보니 constructor 함수를 통해 만들어지는 프로퍼티들은 사용할 수 없다<br>

말그대로 `new`했을 때 메서드가 참조되는 것이 아닌 `class User`를 코드가 읽고 class로 등록할 때 생기는 것이다.<br>
그래서 `new`로 만들어진 인스턴스에선 접근 할 수 없는 것이다

### 상속?

정적 프로퍼티와 메서드도 상속될 수 있다.<br>
다만 생각할 점은 상속받은 자식에서 정적 메서드나 프로퍼티를 호출하면 부모가 가진 정적 메서드나 프로퍼티를 호출한다.<br>
이는 위에서 배운 프로토타입 때문인데 `extends` 키워더는 부모의 Prototype으로 참조할 수 있도록 해주기 때문에 찾을 수 있게 되는 것이다.

고로 정적 메서드와 정적 프로퍼티는 특정 클래스 인스턴스가 아닌 클래서'전체'에서 필요한 기능을 만들 때 사용할 수 있다!

---
