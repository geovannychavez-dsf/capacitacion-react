interface ButtonCharterProps {
  isLoading?: boolean;
  page: number;
  incrementPage: () => void;
  decrementPage: () => void;
}

export const ButtonCountCharter = ({ isLoading, page, incrementPage, decrementPage }: ButtonCharterProps) => {
  return (
    <div  style={{
        display: "flex",
        gap: "10px",
      }}>
        <button
          disabled={isLoading || page === 1}
          className="counter"
          onClick={decrementPage}
        > Prev Page</button>
        <p>{page}</p>
        <button
          disabled={isLoading}
          className="counter"
          onClick={incrementPage}
        >
          Next Page
        </button>
      </div>
  );
};
