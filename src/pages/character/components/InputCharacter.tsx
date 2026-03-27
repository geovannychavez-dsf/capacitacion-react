import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TextField } from '@mui/material';

interface InputCharacterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const InputCharacter = ({ searchTerm, setSearchTerm }: InputCharacterProps) => {
  return (
    <TextField
      fullWidth
      type="text"
      label="Buscar personaje"
      placeholder="Ej: Rick Sanchez"
      value={searchTerm}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
      InputProps={{
        startAdornment: <SearchRoundedIcon sx={{ mr: 1, color: 'text.secondary' }} />,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 3,
          backgroundColor: 'rgba(15, 23, 42, 0.48)',
          backdropFilter: 'blur(8px)',
        },
      }}
    />
  );
};
