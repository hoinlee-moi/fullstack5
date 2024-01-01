type Props = {
  className: string;
  detail: string;
};

const TableData = ({ className, detail }: Props) => {
  return <td className={className}>{detail}</td>;
};

export default TableData;
