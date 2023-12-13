const before = () => console.log("before....");
const after = () => console.log("after...");

console.log("=".repeat(10), "practice3");

const someFn = () => console.log("do something...1");

const template = (fn) => () => (before(), fn.apply(), after());



const temp = template(someFn);

temp();

console.log("=".repeat(10), "practice4");

const someFn2 = (name, greeting) => console.log(`${greeting}, ${name}`);

const template2 =
(fn) =>
(...args) => (before(), fn.apply(this,args), after()); 

const temp2 = template2(someFn2);

temp2("lnsol", "hello");

console.log("=".repeat(10), "practice5");


const someFn3 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);


const temp3 = template2(someFn2);
const temp4 = template2(someFn3);

temp3('lnsol', 'hello');
temp4(1, 'lnsol', 'lnsol@gmail.com', 5);