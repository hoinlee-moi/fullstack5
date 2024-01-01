import clsx from 'clsx';

type Props = {
  className?: string;
  content: string;
};

const TableData = ({ className, content }: Props) => {
  return (
    <td className={clsx('font-primary font-medium px-4 py-4 ', className)}>
      {content}
    </td>
  );
};

export default TableData;
