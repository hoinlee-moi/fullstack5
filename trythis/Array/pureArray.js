const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const addUser = (obj) => [...users, obj];

const removeUser = ({ id }) => users.filter((item) => item.id !== id);
// const removeUser = (obj) => users.filter((item) => item !== obj);

const changeUser = (targetObj, changeObj) =>
  users.map((item) => (item.id === targetObj.id ? changeObj : item));

console.log("addUser>>>", addUser(hong)); // [kim, lee, park, hong]
console.log("users>>>", users);
console.log("removeUser>>>", removeUser(lee)); // [kim, park]
console.log("users>>>", users);
console.log("changeUser>>>", changeUser(kim, choi)); // [choi, lee, park]
console.log("users>>>", users);