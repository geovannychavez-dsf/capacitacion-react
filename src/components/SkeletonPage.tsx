import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
export default function SkeletonPage() {
  return (
    <Grid width={'90%'} height={'90%'}>
      <div>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={100} height={100} />
      </div>
    </Grid>
  );
}
