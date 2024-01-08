import Link from 'next/link';

const time = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <ul>
        <li>
          <Link href={'/hello'}>Hello</Link>
        </li>
        {time.map((time) => (
          <li key={time}>
            <Link href={`/hello/${time}`}>{time}</Link>
          </li>
        ))}
      </ul>
      <div className='col-span-2'>{children}</div>
    </div>
  );
}
