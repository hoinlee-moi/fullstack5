import clsx from 'clsx';
import { ForwardedRef, forwardRef, memo } from 'react';
type Props = {
  type: string;
  placeholder?: string;
  className?: string;
};
const customInput = forwardRef(
  (
    { type, placeholder, className }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className={clsx(
          'p-2 bg-slate-50 outline-blue-500/50 focus:shadow-3xr rounded',
          className
        )}
      />
    );
  }
);
const Input = memo(customInput);
export default Input;
