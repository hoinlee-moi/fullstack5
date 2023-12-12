import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [cacheUrl, setCacheUrl] = useState('');
  const useSessionFetch = (url: string, cb: (data: Session) => void) => {
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
      if (cacheUrl !== url) {
        fetch(url, { signal })
          .then((res) => res.json())
          .then((data: Session) => {
            cb(data);
            setCacheUrl(url);
            console.log(cacheUrl);
          })
          .catch((err) => console.error(err));
      }
      return () => {
        controller.abort();
      };
    }, []);
  };
  return [useSessionFetch] as const;
};
