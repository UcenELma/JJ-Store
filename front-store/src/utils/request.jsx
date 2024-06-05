// import axios from "axios";

// const request = axios.create({
//   baseURL: "http://localhost:2500",
// });

// export default request;
import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:2500",
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userInfo");
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;