import axios from "axios";

const api = axios.create({
    baseUrl = "https://my-jwt-iris.herokuapp.com/",
});

export default api;
