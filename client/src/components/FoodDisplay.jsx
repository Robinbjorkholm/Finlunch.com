import React, { Component } from "react";
import ".././FoodDisplay.css";
import Pagination from "./utility/Pagination";
import getFoodTypes from "./Services/getFoodType";
import NewFood from "./NewFood";

class FoodDisplay extends Component {
  state = {
    FoodFormOpen: false,
  };

  async componentDidMount() {
    const { data } = await getFoodTypes();
    console.log(" data from db" + data);
  }

  openFoodForm = () => {
    this.setState({ FoodFormOpen: true });
  };
  closeFoodForm = () => {
    this.setState({ FoodFormOpen: false });
  };

  render() {
    return (
      <div className="FoodDisplay">
        <button id="openFoodForm" onClick={() => this.openFoodForm()}>
          New Food
        </button>

        {this.state.FoodFormOpen ? <NewFood closeFoodForm={this.closeFoodForm} /> : null}
        <form id="searchForm">
          <input type="text" placeholder="Search..." id="searchBar" name="searchBar"></input>
        </form>
        <div className="FoodItems"></div>
        <Pagination />
      </div>
    );
  }
}

export default FoodDisplay;
