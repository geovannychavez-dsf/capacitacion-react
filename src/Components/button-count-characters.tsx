import { Button } from "@mui/material";

interface ButtonCharterProps {
  isLoading?: boolean;
  page: number;
  incrementPage: () => void;
  decrementPage: () => void;
}

export const ButtonCountCharter = ({
  isLoading,
  page,
  incrementPage,
  decrementPage,
}: ButtonCharterProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
      }}
    >
      <Button
        variant="contained"
        size="small"
        disabled={isLoading || page === 1}
        className="counter"
        onClick={decrementPage}
      >
        {" "}
        Anter.
      </Button>
      <p>{page}</p>
      <Button
        variant="contained"
        size="small"
        disabled={isLoading||page === 42}
        className="counter"
        onClick={incrementPage}
      >
        Sig.
      </Button>
    </div>
  );
};
