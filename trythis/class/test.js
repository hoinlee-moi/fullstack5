// class test1 {
//   name;
//   constructor(str) {
//     this.name = str;
//   }
//   naming;
//   callname;
// }

// const user = new test1('ho')
// console.log(user)


const obj = {
    name : 'ho',
    get : function(){
        console.log(this.name)
    },
    get1:()=>{
        console.log(this.name)
    }
}
obj.get()
obj.get1()
