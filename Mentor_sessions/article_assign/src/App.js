import "./App.css";
import Header from "./components/Header";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="App">
      <div className="flex-col">
        <Header />

        <div className="flex-container">
          <div className="flex-item">
            <Articles />
          </div>
          <div className="flex-item">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
