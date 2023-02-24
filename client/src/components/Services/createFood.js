import Axios from "axios";

const postFood = () => {
  Axios.post(process.env.REACT_APP_CREATEFOOD, {
    FoodName: FoodName,
    FoodType: FoodType,
    FoodDescription: FoodDescription,
  });
}

export default postFood;
