import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import * as React from 'react';
import { useEffect } from 'react';

import SkeletonPage from './SkeletonPage';
import { BoxStyle } from '../styles/alert-retry';
const OLD_PROGRESS = 100;
const INITIAL_PROGRESS = 10;

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress: number) => {
        if (oldProgress === OLD_PROGRESS) {
          return 0;
        }
        const diff = OLD_PROGRESS * INITIAL_PROGRESS;
        return Math.min(oldProgress + diff, OLD_PROGRESS);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={BoxStyle}>
      <LinearProgress variant="determinate" value={progress} />
      <SkeletonPage />
    </Box>
  );
}
