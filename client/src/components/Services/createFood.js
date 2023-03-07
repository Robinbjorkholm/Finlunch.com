import Axios from "axios";

const postFood = (foodName, foodType, foodDescription) => {
  Axios.post("http://localhost:3001/food", {
    foodName: foodName,
    foodType: foodType,
    foodDescription: foodDescription,
  }).then(() => {
    console.log("food created successfully" + foodName, foodType, foodDescription);
  });
};
export default postFood;
