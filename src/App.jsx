import { CharacterListScreen } from "./pages/character-list-page";
import { CssBaseline } from "@mui/material";
import "./App.css";
function App() {
  return (
    <>
      <section id="center">
        <CssBaseline />
        <CharacterListScreen />
      </section>
    </>
  );
}

export default App;
