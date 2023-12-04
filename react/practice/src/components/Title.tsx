type Props = {
  title: string;
  color: string;
  children: string;
};

const Title = ({ title, color, children }: Props) => {
  return (
    <>
      <h1 style={{ color: color }}>{title}</h1>
      <h2>{children}</h2>
    </>
  );
};

export default Title;
