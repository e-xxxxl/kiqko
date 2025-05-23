import React, { useEffect } from 'react'

const OnlineStatusUpdater = () => {
   const userId = localStorage.getItem("userId");
  const useOnlineStatus = (userId) => {
    useEffect(() => {
      if (!userId) return;
  
      // Function to update online status
      const updateOnlineStatus = async (isOnline) => {
        try {
          await fetch(
            `https://kiqko-backend.onrender.com/api/users/online-status/${userId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ isOnline }),
            }
          );
        } catch (error) {
          console.error("Error updating online status:", error);
        }
      };
  
      // Initial update when component mounts
      updateOnlineStatus(true);
  
      // Set up interval for periodic updates (every 5 minutes)
      const intervalId = setInterval(() => {
        if (navigator.onLine) {
          updateOnlineStatus(true);
        }
      }, 5 * 60 * 1000); // 5 minutes
  
      // Update status when window gets focus
      const handleFocus = () => {
        if (navigator.onLine) {
          updateOnlineStatus(true);
        }
      };
  
      // Update status when connection is restored
      const handleOnline = () => {
        updateOnlineStatus(true);
      };
  
      // Update status when connection is lost
      const handleOffline = () => {
        updateOnlineStatus(false);
      };
  
      window.addEventListener("focus", handleFocus);
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
  
      // Cleanup function
      return () => {
        clearInterval(intervalId);
        window.removeEventListener("focus", handleFocus);
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
        // Set offline when component unmounts
        updateOnlineStatus(false);
      };
    }, [userId]);

  };
  useOnlineStatus(userId);
  return (
    <div></div>
  )
}

export default OnlineStatusUpdater