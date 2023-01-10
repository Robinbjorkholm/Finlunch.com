import React, { useState } from "react";
import "./FoodDisplay.css";
import Pagination from "./utility/Pagination";
import NewFood from "./NewFood";

function FoodDisplay() {
  const [foodForm, openFoodForm] = useState(false);

  return (
    <div className="FoodDisplay">
      <button onClick={() => openFoodForm(true)}> New Food </button>

      {foodForm ? <NewFood openFoodForm={openFoodForm} /> : null}
      <form id="searchForm">
        <input type="text" placeholder="Search..." id="searchBar" name="searchBar"></input>
      </form>
      <div className="FoodItems"></div>
      <Pagination />
    </div>
  );
}

export default FoodDisplay;
