import axios from "axios";

export const AxiosApp = axios.create({
  baseURL: "https://application-dollar-backend.onrender.com/",
});
