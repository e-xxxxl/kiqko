import React, { useState, useEffect } from 'react';

const OnlineUsers = () => {
  const [onlineStats, setOnlineStats] = useState({
    women: 0,
    men: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch('https://kiqko-backend.onrender.com/api/users/online-count');
        
        if (!response.ok) {
          throw new Error('Failed to fetch online users');
        }
        
        const data = await response.json();
        setOnlineStats({
          women: data.women || 0,
          men: data.men || 0,
          loading: false,
          error: null
        });
      } catch (err) {
        setOnlineStats(prev => ({
          ...prev,
          loading: false,
          error: err.message
        }));
      }
    };

    fetchOnlineUsers();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchOnlineUsers, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
  <div className="text-center">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Users Online Now</h3>
    {onlineStats.loading ? (
      <div className="py-4">Loading...</div>
    ) : onlineStats.error ? (
      <div className="text-red-500 text-sm py-2">{onlineStats.error}</div>
    ) : (
      <div className="flex justify-between px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <h4 className="text-sm font-medium text-gray-500">Women Online</h4>
          <p className="text-xl font-bold text-gray-800">{onlineStats.women.toLocaleString()}</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <h4 className="text-sm font-medium text-gray-500">Men Online</h4>
          <p className="text-xl font-bold text-gray-800">{onlineStats.men.toLocaleString()}</p>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default OnlineUsers;