import "./App.css";
import Header from "./components/header/Header";
import QuantityShow from "./components/quantityShow/QuantityShow";
import Preview from "./components/preview/Preview";
import Properties from "./components/properties/Properties";

function App() {
  return (
    <div className="app">
      <Header />
      <QuantityShow />
      <Preview />
      <Properties />
    </div>
  );
}

export default App;
