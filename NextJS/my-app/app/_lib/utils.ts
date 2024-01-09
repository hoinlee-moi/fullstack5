export const upperCap = (s: string) => s[0].toUpperCase() + s.slice(1);

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const getPhotos = async (albumId: string | null): Promise<Photos[]> => {
  const res = albumId
    ? await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?id=${albumId}`,
        { cache: 'force-cache' }
      )
    : await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
        cache: 'force-cache',
      });
  return res.json();
};
