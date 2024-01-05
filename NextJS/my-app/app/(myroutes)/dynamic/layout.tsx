import Link from 'next/link';

const dynamicPages = ['shop', 'todos'];

export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <ul>
        <li>
          <Link href={'/dynamic'}>dynamic</Link>
        </li>
        {dynamicPages.map((page) => (
          <li key={page}>
            <Link href={`/dynamic/${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
      <div className='col-span-2'>{children}</div>
    </div>
  );
}
