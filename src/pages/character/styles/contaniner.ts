import type { CSSProperties } from '@mui/material/styles';
import { ToasterProps } from 'sonner';

import { DURATION } from '../constants/character-const.constant';

export const containerCharacterStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

export const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: '#0cdcf7',
  borderRadius: '10px',
};

export const ToastOpction: ToasterProps = {
  position: 'top-center',
  duration: DURATION,
};
