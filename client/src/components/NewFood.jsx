import React, { useState } from "react";
import ".././NewFood.css";

//option ska koma från database finlunchtype

function NewFood({ closeFoodForm }) {
  const initialFoodValues = {
    foodName: "",
    foodType: "",
    foodDescription: "",
  };
  const [Food, setFood] = useState(initialFoodValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFood({
      ...Food,
      [name]: value,
    });
    console.log(Food);
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
          onChange={handleInputChange}
          id="inputFoodName"
          placeholder="Double quarter pounder"
          name="foodName"
          value={Food.foodName}
        ></input>
        <label>Type</label>
        <select
          id="inputFoodType"
          name="foodType"
          value={Food.foodType}
          onChange={handleInputChange}
        >
          <option value="hamburger">hamburger</option>Hamburger
          <option value="pizza">pizza</option>
          <option value="kebab">kebab</option>
        </select>
        <label>Description</label>
        <textarea
          onChange={handleInputChange}
          id="inputFoodDescription"
          placeholder="amazing burger with big patties"
          name="foodDescription"
          value={Food.foodDescription}
        ></textarea>
      </form>
      <button onClick={handleInputChange} type="submit">
        Create
      </button>
    </div>
  );
}

export default NewFood;
