// type callback<T extends unknown[], U> = (...args: T) => U;
export const debounce = <T extends unknown[], U>(
  cb: (...args: T) => U,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

export const throttle = <T extends unknown[], U>(
  cb: (...args: T) => U,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout> | null;

  return (...args: T) => {
    if (timer) return;
    cb(...args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
};
