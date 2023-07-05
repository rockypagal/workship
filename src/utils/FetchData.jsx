import axios from "axios";
import { getUserFromStorage } from "./localStorage";

const FetchData = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

FetchData.interceptors.request.use((request) => {
  const user = getUserFromStorage();
  if (user) {
    request.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return request;
});

export default FetchData;
