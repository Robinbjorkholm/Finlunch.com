import React, { Component } from "react";
import "./Filtering.css";
import { getFoodTypes } from "./../Services/getFoodType";

class Filtering extends Component {
  state = {
    foodTypes: [
      {
        id: 1,
        type: "Hamburger",
      },
      {
        id: 2,
        type: "Pizza",
      },
      { id: 3, type: "kebab" },
    ],
    selectedFoodType: "",
  };

  /*

  Placeholder för att hämt mat sortre från databasin när he e färdi

  async componentDidMount() {
    const { data } = await getFoodTypes();
    this.setState({ foodTypes: data });
    console.log(this.state.foodTypes);
  }
*/
  handleFoodFiltering = food => {
    if (this.state.selectedFoodType === food) {
      this.setState({ selectedFoodType: null });
    } else this.setState({ selectedFoodType: food });
  };

  render() {
    return (
      <div className="Filtering">
        <ul className="FilterFood">
          <p id="whatToEat"> I want to eat </p>
          {this.state.foodTypes.map((food, id) => {
            return (
              <li
                onClick={() => this.handleFoodFiltering(food)}
                key={id}
                id={this.state.selectedFoodType === food ? "foodTypeActive" : "foodType"}
              >
                {food.type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filtering;
