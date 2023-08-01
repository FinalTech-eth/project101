import axios from "axios";

export default axios.create({
  baseURL: "https://aoc-api.onrender.com/api/",
});
