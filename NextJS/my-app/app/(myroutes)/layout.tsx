export default function MyroutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-auto p-5 text-xl border-2 border-solid border-black box-border'>
      {children}
    </div>
  );
}
