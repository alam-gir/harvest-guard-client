import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Response interceptor to handle 401 and refresh token
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await api.post("/auth/refresh"); // backend sets new access token cookie
      return api(originalRequest); // retry original request
    }
    return Promise.reject(err);
  }
);

export default api;
