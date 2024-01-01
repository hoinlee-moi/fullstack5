import clsx from 'clsx';

type Props = {
  content: string;
  className?: string;
};
const Label = ({ content, className }: Props) => {
  return <span className={clsx('font-semibold', className)}>{content}</span>;
};

export default Label;
