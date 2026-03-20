import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { CharacterListScreen } from "./scream/character/character-list-screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <CharacterListScreen />
      </section>
    </>
  );
}

export default App;
