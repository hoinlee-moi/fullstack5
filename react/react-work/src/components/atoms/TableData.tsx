import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  content: string | ReactNode;
};

const TableData = ({ className, content }: Props) => {
  return (
    <td className={clsx('font-primary font-medium px-4 py-4 ', className)}>
      {content}
    </td>
  );
};

export default TableData;
