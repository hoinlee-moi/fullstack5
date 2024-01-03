import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='m-5 bg-blue-400 text-xl'>{children}</div>;
}
