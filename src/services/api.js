import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.111:3333/",
  //baseURL: "http://10.0.3.2",
});

export default api;
