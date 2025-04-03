import axios from "axios";
import { API_BASE_URL } from "./config";
import { getUserAuthData, clearUserData, setUserAuthData } from "./helper/utility";
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getUserAuthData();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for refreshing token on 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const { refreshToken, user } = getUserAuthData();
      if (refreshToken) {
        try {
          const response = await axios.post(
            `${API_BASE_URL}/api/accounts/auth/token/refresh/`,
            { refresh: refreshToken }
          );
          const newAccessToken = response.data.access;
          const decodedToken = jwtDecode(newAccessToken);
          setUserAuthData({
            access: newAccessToken,
            refresh: refreshToken,
            decodedUser: decodedToken
          });
          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token error:", refreshError);
          // Clear user data and redirect to login
          clearUserData();
          window.location.replace("/login");
          return Promise.reject(refreshError);
        }
      }
      clearUserData();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
