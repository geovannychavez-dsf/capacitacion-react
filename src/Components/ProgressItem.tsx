import { CircularProgress, Container } from '@mui/material';

export const ProgressItem = ({ loading }: { loading: boolean }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 35,
      }}
    >
      {loading && <CircularProgress />}
    </Container>
  );
};
