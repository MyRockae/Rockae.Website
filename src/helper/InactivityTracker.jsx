import React, { useEffect } from 'react';
import { logout } from './tokenValidator';

const InactivityTracker = ({ children }) => {
  useEffect(() => {
    let inactivityTimer;
    const INACTIVITY_TIMEOUT = 60 * 60 * 1000; // 1 hr

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        console.log("User inactive for 1 minute, logging out...");
        logout();
      }, INACTIVITY_TIMEOUT);
    };

    // Reset timer on user activity
    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);


    // Start the initial timer
    resetInactivityTimer();

    // Cleanup function to remove event listeners and clear timer
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return children;
};

export default InactivityTracker; 