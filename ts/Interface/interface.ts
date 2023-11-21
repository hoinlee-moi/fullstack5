interface User {
    id: number;
    name: string;
  }
  
  interface Dept {
    id: number;
    dname: string;
    captain: string;
  }
  
  // //ex) 다음을 interface로 어떻게 정의할까??
  // type Ud2 = (User | Dept) & {addr: string};
  
  
  interface UdA extends  User {
    addr:string;
  } 
  interface UdB extends Dept {
    addr:string
  }
  
  type Ud2 = UdA | UdB
  
  const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
  const ud22: Ud2 = {id: 1, name: 'HH', captain: 'HH', addr: 'Seoul'};
  
  interface Ud3 {
    [i:string] : string | number;
    id : number;
    addr : string;
  }
  
  const ud3: Ud3 = {id: 1, name: 'HH', addr: 'Seoul'};
  const ud33: Ud3 = {id: 1, name: 'HH', captain: 'HH', addr: 'Seoul'};
  
  
  
  
  interface A {
    id: number | string;
  }
  
  interface B {
    id : number | string;
    name: string;
  }
  
  //Interface 'C' cannot simultaneously extend types 'A' and 'B'.
  //  Named property 'id' of types 'A' and 'B' are not identical.(2320)
  interface C extends A, B {
    // id: string & number // error가 없지만 양립될 수 없어서 never타입이 됨
    // 즉 id : never; 가 되어버림
    // 아니면 any
    addr: string;
  }
  
  // ex) id 오류가 안나도록 다중 상속하려면??