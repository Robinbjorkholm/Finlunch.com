import React, { useState } from "react";
import ".././NewFood.css";
import postFood from "./Services/createFood";


function NewFood({ closeFoodForm }) {
  const [foodName, setfoodName] = useState("");
  const [foodType, setfoodType] = useState("Hamburger");
  const [foodDescription, setfoodDescription] = useState("");

  postFood(foodName, foodType, foodDescription);

  /*const updateFood = () => {
    Axios.put("http://localhost:3001/api/food/:id", {
      foodName: foodName,
      foodType: foodType,
      foodDescription: foodDescription,
    }).then(() => {
      console.log("food created successfully" + foodName, foodType, foodDescription);
    });
  };
*/

  function enableCreateButton() {
    let inputFoodDescription = document.getElementById("inputFoodDescription").value;
    let inputFoodName = document.getElementById("inputFoodName").value;
    if (inputFoodDescription.length >= 10 && inputFoodName.length >= 1) {
      document.getElementById("submitButton").disabled = false;
    } else {
      document.getElementById("submitButton").disabled = true;
    }
  }

  return (
    <div className="CreateNewFood">
      <form id="foodForm">
        <button id="closeFoodForm" onClick={closeFoodForm}>
          &#x2715;
        </button>
        <h3 id="addFoodHeader">Add food</h3>

        <label>Name</label>
        <input
          onChange={e => {
            setfoodName(e.target.value);
            enableCreateButton();
          }}
          id="inputFoodName"
          placeholder="Double quarter pounder"
          name="foodName"
        ></input>

        <label>Type</label>
        <select id="inputFoodType" name="foodType" onChange={e => setfoodType(e.target.value)}>
          <option value="hamburger">Hamburger</option>
          <option value="pizza">Pizza</option>
          <option value="kebab">Kebab</option>
        </select>

        <label>Description</label>
        <textarea
          onChange={e => {
            setfoodDescription(e.target.value);
            enableCreateButton();
          }}
          id="inputFoodDescription"
          placeholder="amazing burger with big patties"
          name="foodDescription"
        ></textarea>

        <button type="Submit" value="Submit" onClick={postFood} id="submitButton" disabled>
          Create
        </button>
      </form>
    </div>
  );
}

export default NewFood;
