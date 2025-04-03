/**
 * Clears all user-related data from localStorage
 */
export const clearUserData = () => {
    localStorage.removeItem("rockaeUserProfile");
    localStorage.removeItem("rockaeUserAccessToken");
    localStorage.removeItem("rockaeUserRefreshToken");
    localStorage.removeItem("rockaeUser");
  };
  
  /**
   * Sets user authentication data in localStorage
   * @param {Object} data - Object containing access token, refresh token, and decoded user data
   * @param {string} data.access - Access token
   * @param {string} data.refresh - Refresh token
   * @param {Object} data.decodedUser - Decoded user data
   */
  export const setUserAuthData = ({ access, refresh, decodedUser }) => {
    localStorage.setItem("rockaeUserAccessToken", access);
    localStorage.setItem("rockaeUserRefreshToken", refresh);
    localStorage.setItem("rockaeUser", JSON.stringify(decodedUser));
  };
  
  /**
   * Gets user authentication data from localStorage
   * @returns {Object} Object containing user auth data
   */
  export const getUserAuthData = () => {
    return {
      accessToken: localStorage.getItem("rockaeUserAccessToken"),
      refreshToken: localStorage.getItem("rockaeUserRefreshToken"),
      user: JSON.parse(localStorage.getItem("rockaeUser")),
      userProfile: JSON.parse(localStorage.getItem("rockaeUserProfile"))
    };
  };
  
  /**
   * Sets user profile data in localStorage
   * @param {Object} profileData - User profile data
   */
  export const setUserProfile = (profileData) => {
    localStorage.setItem("rockaeUserProfile", JSON.stringify(profileData));
  };
  
  /**
   * Gets user profile data from localStorage
   * @returns {Object} User profile data
   */
  export const getUserProfile = () => {
    return JSON.parse(localStorage.getItem("rockaeUserProfile"));
  }; 