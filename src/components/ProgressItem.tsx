import { Box, CircularProgress, Fade } from '@mui/material';

interface ProgressItemProps {
  loading: boolean;
}

export const ProgressItem = ({ loading }: ProgressItemProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: 36 }}>
      <Fade in={loading} unmountOnExit>
        <CircularProgress size={26} thickness={4} />
      </Fade>
    </Box>
  );
};
