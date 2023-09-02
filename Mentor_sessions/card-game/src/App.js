import logo from "./logo.svg";
import "./App.css";
import CardGame from "./pages";
import CardProvider from "./contextProviders/CardProvider";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <CardGame />
      </CardProvider>
    </div>
  );
}

export default App;
