import axios from "axios";

function getFoodTypes() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/2")
    .catch(err => console.log(err).then(console.log("he fungera")));
}

export default getFoodTypes;
