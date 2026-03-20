interface ButtonCharterProps {
  onClick: () => void;
  title: string;
}

export const ButtonCharter = ({ onClick, title }: ButtonCharterProps) => {
  return (
    <button className="button-charter" onClick={onClick}>
      {title}
    </button>
  );
};
