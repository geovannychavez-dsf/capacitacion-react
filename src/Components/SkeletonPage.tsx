import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { BoxStyle } from '../styles/alert-retry';
export default function SkeletonPage() {
  return (
    <Grid style={BoxStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" style={BoxStyle} />
      </div>
    </Grid>
  );
}
