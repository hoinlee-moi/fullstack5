import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  detail: string;
  type?: string;
  onClick?: () => void;
  className?: string;
};
const customButton = ({ detail, className, onClick = () => {} }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'text-nowrap px-3 py-1 bg-slate-100 rounded font-bold text-base hover:text-slate-100 hover:bg-slate-500 ',
        className
      )}
    >
      {detail}
    </button>
  );
};
const Button = memo(customButton);
export default Button;
