import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string): T | undefined => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => controller.abort();
  }, []);
  return data;
};
