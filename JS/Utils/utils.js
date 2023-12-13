const deepCopy = (obj) => {
  if (
    obj === null ||
    typeof obj !== "object" ||
    obj instanceof WeakMap ||
    obj instanceof WeakSet
  )
    return obj;

  const value = obj.valueOf();
  if (obj.constructor.name === "Symbol") return Object(value);

  if (obj instanceof Map) {
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepCopy(k), deepCopy(v)])
    );
  } else if (obj instanceof Set) {
    return new Set([...obj].map((a) => deepCopy(a)));
  }

  const copiedObj = new obj.constructor(typeof value !== "object" ? value : {});
  if (copiedObj instanceof String) return copiedObj;

  for (const k of Reflect.ownKeys(obj)) {
    copiedObj[k] = deepCopy(obj[k]);
  }
  return copiedObj;
};

export { deepCopy };
