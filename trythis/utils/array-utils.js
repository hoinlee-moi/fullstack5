const range = (start, end, item = 1) => {
  let startNum = end === undefined ? (start <= 0 ? start : 1) : start;
  let endNum = end === undefined ? (start < 0 ? -1 : start) : end;
  console.log(startNum, endNum, item);
};
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value) {
  return this.filter((a) => a[prop] === value);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((v) => v[prop]))];
};

export { range };
