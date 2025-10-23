import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: 'https://nunya.dayal-enterprises.com/public/api',
  baseURL: "http://192.168.0.38/vote_api/public/api",
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erreur API:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
