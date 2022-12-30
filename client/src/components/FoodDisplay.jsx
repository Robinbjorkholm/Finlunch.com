import React from "react";
import "./FoodDisplay.css";

function FoodDisplay() {
  return (
    <div className="FoodDisplay">
      <form id="searchForm">
        <input type="text" placeholder="Search..." id="searchBar" name="searchBar"></input>
      </form>
      <div className="FoodItems"></div>
    </div>
  );
}

export default FoodDisplay;
