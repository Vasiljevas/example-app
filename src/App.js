import logo from "./logo.svg";
import "./App.css";
import { getAll } from "./services/cards";

const getAllCards = async () => {
  console.log(await getAll());
};

function App() {
  getAllCards();

  return <div className="App">Hello World, this is the front end!</div>;
}

export default App;
