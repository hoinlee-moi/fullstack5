import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  children: string;
  type?: string;
  onClick?: () => void;
  className?: string;
};
const customButton = ({ children, className, onClick = () => {} }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-6 py-2 bg-white font-bold text-xl hover:text-blue-600/100',
        className
      )}
    >
      {children}
    </button>
  );
};
const Button = memo(customButton);
export default Button;
