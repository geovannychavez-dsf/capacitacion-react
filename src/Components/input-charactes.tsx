interface ButtonCharterProps { 
    searchTerm: string; setSearchTerm: (value: string) => void 
}
export const InputCharacter = ({ searchTerm, setSearchTerm }: ButtonCharterProps) => {
  return (
     <input
            style={{
              padding: "10px",
              width: "300px",
              fontSize: "16px",
            }}
            type="text"
            placeholder="Buscar nombre de personaje..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />)
}
