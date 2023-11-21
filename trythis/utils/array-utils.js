const range = (start, end, step) => {
  if (start === end || step === 0) return [start];
  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  const idxNum = end === undefined ? (start > 0 ? 1 : start) : start;
  const endNum = end === undefined ? (start < 0 ? -1 : start) : end;
  const stepNum = step === undefined ? (start > end ? -1 : 1) : step;

  const arr = [
    ...Array(Math.ceil((Math.abs(idxNum - endNum) + 1) / Math.abs(stepNum))),
  ];
  arr.reduce((acc, cur, i) => {
    arr[i] = acc;
    return acc + stepNum;
  }, idxNum);
  return arr;
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
