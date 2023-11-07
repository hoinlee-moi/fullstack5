const assertArray = (arr1, arr2) =>
  arr1.filter((v) => arr2.includes(v)).length === arr2.length
    ? console.log(`통>> ${arr1}`)
    : console.log(`실패>> [${arr1}]와 [${arr2}]가 다릅니다`);

export { assertArray };
