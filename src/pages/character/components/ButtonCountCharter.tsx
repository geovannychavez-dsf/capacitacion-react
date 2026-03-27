import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Button, Chip } from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: 1,
      }}
    >
      <Button
        variant="contained"
        size="small"
        disabled={isLoading || page === INICIO_PAGE_CHARACTER}
        onClick={decrementPage}
        startIcon={<ArrowBackIosRoundedIcon fontSize="small" />}
      >
        Anterior
      </Button>
      <Chip label={`Pagina ${page}`} color="secondary" variant="outlined" />
      <Button
        variant="contained"
        size="small"
        disabled={isLoading || page === FIN_PAGE_CHARACTER}
        onClick={incrementPage}
        endIcon={<ArrowForwardIosRoundedIcon fontSize="small" />}
      >
        Siguiente
      </Button>
    </Box>
  );
};
