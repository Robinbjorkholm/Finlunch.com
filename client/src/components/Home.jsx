import React from "react";
import Hero from "./Hero";
import FoodDisplay from "./FoodDisplay";
import Filtering from "./utility/Filtering";

function Home() {
  return (
    <div>
      <Hero />
      <FoodDisplay />
      <Filtering />
    </div>
  );
}

export default Home;
