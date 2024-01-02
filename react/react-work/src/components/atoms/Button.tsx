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
        'px-6 py-2 bg-white font-bold text-base hover:text-blue-600/100',
        className
      )}
    >
      {detail}
    </button>
  );
};
const Button = memo(customButton);
export default Button;
