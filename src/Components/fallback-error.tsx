import { Box, Button, Container, Typography } from '@mui/material';
import * as motion from 'motion/react-client';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
export const FallbackError = ({
  error,
  resetErrorBoundary,
}: {
  error: boolean;
  resetErrorBoundary: () => void;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      key="box"
    >
      <Container maxWidth="sm">
        <Box
          className="box-shadow"
          alignItems={'center'}
          display={'flex'}
          border={'crimson'}
          flexDirection={'column'}
          height={'100'}
        >
          <ReportProblemIcon color="error" sx={{ fontSize: 100 }} />
          <Typography variant="body1">{error && 'Ocurrio un error'}</Typography>
          <Typography variant="body1">
            Intente nuevamente o comuniquese con el administrador
          </Typography>
          <Button variant="contained" color="error" onClick={resetErrorBoundary}>
            Reintentar
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};
