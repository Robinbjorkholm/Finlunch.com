import React from "react";
import "./FoodDisplay.css";
import Pagination from "./utility/Pagination";

function FoodDisplay() {
  return (
    <div className="FoodDisplay">
      <form id="searchForm">
        <input type="text" placeholder="Search..." id="searchBar" name="searchBar"></input>
      </form>
      <div className="FoodItems"></div>
      <Pagination />
    </div>
  );
}

export default FoodDisplay;
