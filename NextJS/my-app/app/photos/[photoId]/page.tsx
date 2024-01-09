import { Photos, getPhotos } from '@/app/_lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const photos = await getPhotos(null);
  return photos.map((photo: Photos) => ({
    photoId: `${photo.id}`,
  }));
}

export default async function PhotoId({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const data: Photos[] = await getPhotos(photoId);
  const photo = data[0];
  if (!photo) return notFound;
  return (
    <div className='flex flex-col items-center p-3'>
      <Image
        src={photo.url}
        alt={photo.title}
        width={600}
        height={600}
        priority
      />
      <div>
        <h1 className='text-4xl'>{photo.title}</h1>
      </div>
    </div>
  );
}
