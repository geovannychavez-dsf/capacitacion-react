import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
export default function SkeletonPage() {
  return (
    <Grid width={'100%'} height={'100%'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
      </div>
    </Grid>
  );
}
