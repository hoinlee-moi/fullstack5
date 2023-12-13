const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

function entriesWithSymbol(obj) {
  return Reflect.ownKeys(obj);
}

const obj = {
    name: 'ObjName',
    // bark1() {
    //   console.log('1=', this.name);
    //   setTimeout( function(aa) {
    //     console.log('11=', aa);
    //   }, 500,this);
    //   console.log('xxxx');
    // },
    bark2() {
      console.log('2=', this.name);
      setTimeout(() => {
        console.log('22=', this.name);
      }, 500);
    },
  };
  
//   obj.bark1();
  obj.bark2();
  