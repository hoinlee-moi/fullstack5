import { Photos, getPhotos } from '@/app/_lib/utils';
import BasicModal from '@/components/BasicModal';
import Image from 'next/image';
import React from 'react';

export default async function ViewrPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const data: Photos[] = await getPhotos(photoId);
  const photo = data[0];

  return (
    <BasicModal>
      <div className='w-96 h-auto bg-white p-3 rounded box-border'>
        <div className='flex items-center justify-center flex-col '>
          <Image
            src={photo.url}
            alt={photo.title}
            width={600}
            height={600}
            priority
          />

          <h1 className='mt-2'>{photo.title}</h1>
        </div>
      </div>
    </BasicModal>
  );
}
