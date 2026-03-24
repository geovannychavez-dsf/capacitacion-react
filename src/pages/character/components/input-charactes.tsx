import { TextField } from '@mui/material';
import { inputCharterStyle } from '../styles/textinput';
interface ButtonCharterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
export const InputCharacter = ({ searchTerm, setSearchTerm }: ButtonCharterProps) => {
  return (
    <TextField
      style={inputCharterStyle}
      type="text"
      placeholder="Buscar nombre de personaje..."
      value={searchTerm}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
    />
  );
};
