import Hero from "./components/Hero";
import FoodDisplay from "./components/FoodDisplay";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Hero />
      <FoodDisplay />
    </div>
  );
}

export default App;
