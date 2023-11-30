type Props = {
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  padding: string;
  margin: string;
  children: React.ReactNode;
};

const Box = ({
  borderWidth,
  borderColor,
  borderStyle,
  padding,
  margin,
  children,
}: Props) => {
  return (
    <div
      style={{
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
