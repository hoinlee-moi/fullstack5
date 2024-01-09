// Generated by https://quicktype.io
import Image from 'next/image';
import Link from 'next/link';
import { Photos, getPhotos } from '../_lib/utils';

export default async function PhotosPage() {
  const photos = await getPhotos(null);

  return (
    <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2 p-3 items-center justify-center'>
      {photos.map((photo: Photos) => (
        <Link href={`/photos/${photo.id}`} scroll={false} key={photo.id}>
          <div className='card  shadow-xl flex items-center justify-center flex-col rounded relative overflow-hidden group'>
            <div className='card-body flex items-center justify-center w-full h-full absolute top-0 left-0 duration-500 opacity-0 group-hover:opacity-100 z-10'>
              <h1 className='card-title whitespace-nowrap overflow-hidden text-ellipsis'>
                {photo.title}
              </h1>
            </div>
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
              priority
              className=' duration-500 group-hover:opacity-0'
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
