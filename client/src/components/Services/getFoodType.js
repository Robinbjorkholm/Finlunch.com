import axios from "axios";

export function getFoodTypes() {
  return axios.get("https://jsonplaceholder.typicode.com/posts").catch(err => console.log(err));
  
}
