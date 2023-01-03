import React, { Component } from "react";
import "./Filtering.css";
import { getFoodTypes } from "./../Services/getFoodType";

class Filtering extends Component {
  state = {
    foodTypes: ["Hamburger", "Pizza", "Kebab"],
  };

  /*

  Placeholder för att hämt mat sortre från databasin när he e färdi

  async componentDidMount() {
    const { data } = await getFoodTypes();
    this.setState({ foodTypes: data });
    console.log(this.state.foodTypes);
  }
*/
  render() {
    return (
      <div className="Filtering">
        <ul className="FilterFood">
          {this.state.foodTypes.map(food => {
            return (
              <li onClick={() => console.log(food)} key={food}>
                {food}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filtering;
