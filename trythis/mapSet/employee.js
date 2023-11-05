//다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,  개발팀 직원 이름 목록을 출력하시오. (key: id)

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map(depts.map((v) => [v.id, v]));
const empMap = new Map(emps.map((v) => [v.id, v]));

const empDeptArr = emps.map((v) => {
  Object.defineProperty(v, "dept", { enumerable: false });
  return [v, deptMap.get(v.dept)];
});

const empDept = new Map(empDeptArr);

// const deptMap = new Map();
// for (const value of depts) deptMap.set(value.id, value);

// const empMap = new Map();
// for (const value of emps) empMap.set(value.id, value);

// const empDept = new Map();
// for (const value of empMap) {
//   Object.defineProperty(value[1], "dept", { enumerable: false });
//   empDept.set(value[1], deptMap.get(value[1].dept));
// }

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
