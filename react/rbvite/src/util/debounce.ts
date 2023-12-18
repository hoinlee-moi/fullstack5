// type callback<T extends unknown[], U> = (...args: T) => U;
export const debounce = <T extends unknown[], U>(
  cb: (...args: T) => U,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    if (timer) clearTimeout(timer);
    setTimeout(cb, delay, ...args);
  };
};
