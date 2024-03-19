import axios from "axios";
import { loadState } from "../lib/storage";
import Cookies from "js-cookie";

const request = axios.create({ baseURL: "http://localhost:8000" });

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8000/all", JSON.parse(config.data))
        .then((res) => {
          console.log(res.data);  
        });
    }
  }, 500);

  return;
};


request.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    Cookies.set("cookiesToken",token?.accessToken, {expires: 30, path: '/auth/login'})
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`,
    };
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return (window.location.pathname = "/");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export { request };
