import clsx from 'clsx';
import { ForwardedRef, forwardRef, memo } from 'react';
type Props = {
  type: string;
  onChange?: VoidFn;
  placeholder?: string;
  classNames?: string;
};
const customInput = forwardRef(
  (
    { type, placeholder, classNames, onChange }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className={clsx(
          'p-1 bg-slate-100 outline-blue-500/50 focus:shadow-3xr rounded',
          classNames
        )}
        onChange={onChange}
      />
    );
  }
);
const Input = memo(customInput);
export default Input;
