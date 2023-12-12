import { useEffect } from 'react';
export const useTimer = () => {
  const useInterTimer = (cb: () => void, delay: number) => {
    useEffect(() => {
      const inter = setInterval(cb, delay);
      return () => {
        clearInterval(inter);
      };
    }, []);
  };
  const useTimeOut = <T extends Array<unknown>>(
    cb: (...args: T) => void,
    delay: number,
    ...args: T
  ) => {
    useEffect(() => {
      const timer = setTimeout(cb, delay, ...args);
      return () => clearTimeout(timer);
    }, []);
  };
  return [useInterTimer, useTimeOut] as const;
};
