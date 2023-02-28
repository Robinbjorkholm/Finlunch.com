import React, { useState } from "react";
import ".././NewFood.css";
import postFood from "./Services/createFood";
import Axios from "axios";

function NewFood({ closeFoodForm }) {
  const [foodName, setfoodName] = useState("");
  const [foodType, setfoodType] = useState("Hamburger");
  const [foodDescription, setfoodDescription] = useState("");

  const postFood = () => {
    Axios.post("http://localhost:3001/api/food", {
      foodName: foodName,
      foodType: foodType,
      foodDescription: foodDescription,
    }).then(() => {
      console.log("food created successfully" + foodName, foodType, foodDescription);
    });
  };
  const updateFood = () => {
    Axios.post("http://localhost:3001/api/food/:id", {
      foodName: foodName,
      foodType: foodType,
      foodDescription: foodDescription,
    }).then(() => {
      console.log("food created successfully" + foodName, foodType, foodDescription);
    });
  };

  return (
    <div className="CreateNewFood">
      <button id="closeFoodForm" onClick={closeFoodForm}>
        &#x2715;
      </button>
      <h3 id="addFoodHeader">Add food</h3>
      <form id="foodForm">
        <label>Name</label>
        <input
          onChange={e => {
            setfoodName(e.target.value);
          }}
          id="inputFoodName"
          placeholder="Double quarter pounder"
          name="foodName"
        ></input>

        <label>Type</label>
        <select
          /*option ska koma från database finlunchtype*/
          id="inputFoodType"
          name="foodType"
          onChange={e => setfoodType(e.target.value)}
        >
          <option value="hamburger">Hamburger</option>
          <option value="pizza">Pizza</option>
          <option value="kebab">Kebab</option>
        </select>

        <label>Description</label>
        <textarea
          onChange={e => {
            setfoodDescription(e.target.value);
          }}
          id="inputFoodDescription"
          placeholder="amazing burger with big patties"
          name="foodDescription"
        ></textarea>
      </form>
      <button onClick={postFood} type="submit">
        Create
      </button>
    </div>
  );
}

export default NewFood;
