import { CSSProperties } from '@mui/material';

export const alertReinteryStyle: CSSProperties = {
  padding: '1rem',
  border: '1px solid red',
  borderRadius: '4px',
  backgroundColor: '#ffe6e6',
};

export const BoxStyle: CSSProperties = {
  height: '100%',
  width: '100%',
};

export const POSITION_RELATIVE: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
};

export const CONTENEDOR_LEFT: CSSProperties = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1e5bdf 0%, #4b7ba2 100%)',
  p: 6,
};

export const DECORADOR_CIRCLES: CSSProperties = {
  position: 'absolute',
  width: 400,
  height: 400,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.1)',
  top: -100,
  left: -100,
};

export const CIRCLE_POSITION: CSSProperties = {
  position: 'absolute',

  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.1)',
};
