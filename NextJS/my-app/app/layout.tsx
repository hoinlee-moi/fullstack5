import type { Metadata } from 'next';
import Link from 'next/link';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_KR({ subsets: ['latin'], variable: '--noto--font' });
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={noto.className}>
        <header className='h-16 mb-3 text-lg flex justify-evenly items-center border-b border-solid border-black'>
          <Link href={'/about'}>about</Link>
          <Link href={'/hello'}>hello</Link>
          <Link href={'/dynamic'}>dynamic</Link>
          <Link href={'/paralell'}>paralell</Link>
          <Link href={'/intercept'}>intercept</Link>
          <Link href={'/photos'}>photos</Link>
        </header>
        {children}
        <footer className='h-8 p-2 mt-3 flex items-center justify-center text-lg border-t border-solid border-black'>
          <p>made by moi_lee</p>
        </footer>
      </body>
    </html>
  );
}
