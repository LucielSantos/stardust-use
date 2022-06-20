import { ThemeProvider } from "luciel-stardust-react";
import PlayGround from "./playGround";
function App() {
  return (
    <ThemeProvider>
      <h1>Hello world</h1>

      <PlayGround />
    </ThemeProvider>
  );
}

export default App;
