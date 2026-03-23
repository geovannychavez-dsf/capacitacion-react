import { CssBaseline } from "@mui/material";
import { CharacterListScreen } from "./pages/character/character-page";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <>
      <CssBaseline />
      <ErrorBoundary>
        <CharacterListScreen />
      </ErrorBoundary>
    </>
  );
}

export default App;
