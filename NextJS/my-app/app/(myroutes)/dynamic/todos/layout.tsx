import LinkInput from '@/components/LinkInput';

export default function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {' '}
      <strong>Welcome!! Todos!!</strong>
      <div className='m-1'>
        <LinkInput />
      </div>
      {children}
    </div>
  );
}
