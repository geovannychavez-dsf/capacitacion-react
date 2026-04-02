import { CSSProperties } from '@mui/material';

export const TextFieldStyle: CSSProperties = {
  mb: 2.5,
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.05)',
    borderRadius: 2,
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
    '&.Mui-focused fieldset': { borderColor: '#6690ea' },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255,255,255,0.5)',
  },
};
