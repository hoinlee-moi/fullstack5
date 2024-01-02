import clsx from 'clsx';
import Label from '../atoms/Label';

type Props = {
  title: string;
  content: string;
  fontClass?: string;
  classNames?: string;
};

const LabelContent = ({ title, content, fontClass, classNames }: Props) => {
  return (
    <div className={clsx(' p-1', fontClass, classNames)}>
      <Label content={title} className='mr-2' />
      {content}
    </div>
  );
};

export default LabelContent;
