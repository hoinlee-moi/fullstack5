type Props = {
  content: string;
  className?: string;
};
const Label = ({ content, className }: Props) => {
  return <span className={className}>{content}</span>;
};

export default Label;
