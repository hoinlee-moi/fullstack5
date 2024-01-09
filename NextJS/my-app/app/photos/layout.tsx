import { ReactNode } from 'react';

type Props = {
  viewer: ReactNode;
  children: ReactNode;
};
export default function PhotosLayout({ viewer, children }: Props) {
  return (
    <div>
      {viewer}
      <div>{children}</div>
    </div>
  );
}
