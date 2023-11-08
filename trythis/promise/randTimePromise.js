const randTime = (val) =>
  new Promise(resolve => {
    const randT = Math.random() * 1000;
    console.log("randTime>>>", val, randT);
    setTimeout(resolve, randT, val);
  });

[1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));

// export { randTime };
