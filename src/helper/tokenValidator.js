import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { API_BASE_URL } from "../config";
import { clearUserData, getUserAuthData, setUserAuthData } from "./utility";

const refreshEndpoint = `${API_BASE_URL}/accounts/auth/token/refresh/`;

export const logout = () => {
  clearUserData();
  window.location.replace("/login");
};

export const checkTokenValidity = async () => {
  const { accessToken, refreshToken } = getUserAuthData();

  // If there's no access token, throw error to trigger logout
  if (!accessToken) {
    throw new Error("No access token found");
  }


  try {
    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000; // JWT exp is in seconds

    if (decodedToken.exp < currentTime) {
      // Access token has expired
      if (refreshToken) {
        try {
          // Attempt to get a new access token using the refresh token
          const response = await axios.post(refreshEndpoint, {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;
          setUserAuthData({
            access: newAccessToken,
            refresh: refreshToken,
            decodedUser: decodedToken
          });
          return true;
        } catch (error) {
          console.error("Failed to refresh token:", error);
          throw new Error("Failed to refresh token");
        }
      } else {
        // No refresh token available
        throw new Error("No refresh token available");
      }
    }
    // If the access token is valid, return true
    return true;
  } catch (error) {
    // Could not decode token (it may be malformed) or other errors
    console.error("Token validation error:", error);
    throw error;
  }
};
