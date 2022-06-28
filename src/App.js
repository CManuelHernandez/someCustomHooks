import logo from "./logo.svg";
import "./App.css";
import { MiComponente } from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
