import axios from "axios";
import { Alert } from "react-native";
import { getUser } from "../utils/utils";

const api = axios.create({
  baseURL: "https://my-jwt-iris.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const accessToken = await getUser();

    if (accessToken) {
      config.headers.Authorization = JSON.parse(accessToken);
    }

    return config;
  } catch (e) {
    Alert.alert("Aviso", e.message, [{ text: "OK" }], { cancelable: false });
  }
});

export default api;
