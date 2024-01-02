/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId, useReducer } from 'react';

type Props = {
  content: string;
  classNames?: string;
};

const CheckBox = forwardRef(
  (
    { content = '', classNames: classNames }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [checked, toggle] = useReducer((checked) => !checked, false);
    const id = useId();
    const checkedCss =
      'border-0 bg-sky-500 before:content-["√"] text-slate-50 font-black ';

    return (
      <label
        htmlFor={id}
        className='group cursor-pointer flex items-center justify-center duration-200  '
        onMouseUp={toggle}
      >
        {content}
        <span
          className={clsx(
            ' inline-block ml-2 w-4 h-4 leading-4 border-solid border border-black text-base duration-200 rounded group-active:scale-0 group-active:border-0',
            {
              [checkedCss]: checked,
            },
            classNames
          )}
        />
        <input id={id} type='checkbox' className='hidden' ref={ref} />
      </label>
    );
  }
);

export default CheckBox;
