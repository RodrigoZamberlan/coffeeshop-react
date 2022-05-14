import "./styles.css";
import Search from "./components/search/search";
import CoffeeContent from "./components/coffee-content/coffeeContent";

export default function App() {
  return (
    <div className="App">
      <h1>
        Find the best <br />
        Coffee for you
      </h1>
      <Search />
      <CoffeeContent />
    </div>
  );
}
