import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId, useReducer } from 'react';

type Props = {
  content: string;
  className?: string;
};

const CheckBox = forwardRef(
  ({ content, className }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [checked, setChecked] = useReducer((checked) => !checked, false);
    const id = useId();
    const checkedCss =
      'border-0 bg-sky-500 before:content-["√"] text-slate-50 font-black ';
    return (
      <>
        <label
          htmlFor={id}
          className='group cursor-pointer flex items-center justify-center duration-200  '
          onMouseUp={setChecked}
        >
          {content}
          <span
            className={clsx(
              ' inline-block ml-2 w-4 h-4 leading-4 border-solid border border-black text-base duration-200 group-active:scale-0 group-active:border-0',
              {
                [checkedCss]: checked,
              }
            )}
          />
        </label>
        <input id={id} type='checkbox' className='hidden' ref={ref} />
      </>
    );
  }
);

export default CheckBox;
