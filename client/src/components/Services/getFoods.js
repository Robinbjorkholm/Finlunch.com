import axios from "axios";

async function getFoods() {
  return axios.get("http://localhost:3001/food").catch(err => console.log(err));
}

export default getFoods;
