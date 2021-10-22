import "./App.css";
import { getAll } from "./services/cards";
import { useEffect, useState } from "react";
import Card from "./components/card";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      setCards(await getAll());
    };
    getAllCards();
  }, []);

  return (
    <div className="App">
      Hello World, this is the front end!
      {cards && cards.length > 0 ? (
        cards.map((c) => <Card key={c.id} card={c} />)
      ) : (
        <div>no cards found</div>
      )}
    </div>
  );
}

export default App;
