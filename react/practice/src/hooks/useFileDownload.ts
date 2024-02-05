import { useEffect } from "react";

export const useFileDownload = () => {
  const createDownload = (tag: HTMLAnchorElement, data: string, dep: any) => {
    useEffect(() => {
      if (dep) {
        const file = new Blob([data], {
          type: "text/plain",
        });
        tag.href = URL.createObjectURL(file);
        tag.download = "test.txt";
      }
      return () => {
        tag.href = "#none";
        tag.download = "";
      };
    }, [dep]);
  };

  return createDownload;
};
