import { useEffect } from 'react';
export const useTimer = () => {
  const interTimer = (cb: () => void, delay: number) => {
    useEffect(() => {
      let inter = setInterval(cb, delay);
      return () => {
        clearInterval(inter);
      };
    }, []);
  };
  const timerSetInit = <T extends Array<unknown>>(
    cb: (...args: T) => void,
    delay: number,
    ...args: T
  ) => {
    useEffect(() => {
      const timer = setTimeout(cb, delay, ...args);
      return () => clearTimeout(timer);
    }, []);
  };
  return [interTimer, timerSetInit] as const;
};
