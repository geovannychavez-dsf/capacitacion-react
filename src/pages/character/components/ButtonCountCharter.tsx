import { Button } from '@mui/material';

import { FIN_PAGE_CHARACTER, INICIO_PAGE_CHARACTER } from '../constants/character-constants';

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
        display: 'flex',
        gap: '15px',
      }}
    >
      <Button
        variant="contained"
        size="small"
        disabled={isLoading || page === INICIO_PAGE_CHARACTER}
        className="counter"
        onClick={decrementPage}
      >
        {' '}
        Anter.
      </Button>
      <p>{page}</p>
      <Button
        variant="contained"
        size="small"
        disabled={isLoading || page === FIN_PAGE_CHARACTER}
        className="counter"
        onClick={incrementPage}
      >
        Sig.
      </Button>
    </div>
  );
};
