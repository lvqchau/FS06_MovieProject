import axios from "axios";

export const restConnector = axios.create({
  baseURL: "http://localhost:5000/api/"
});
