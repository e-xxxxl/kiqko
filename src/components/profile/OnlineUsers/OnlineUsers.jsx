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
        const response = await fetch('http://localhost:5000/api/users/online-count');
        
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
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <h5 className="font-bold border-b pb-2 mb-3">Users Online Now</h5>
      {onlineStats.loading ? (
        <div className="py-4">Loading...</div>
      ) : onlineStats.error ? (
        <div className="text-red-500 text-sm py-2">{onlineStats.error}</div>
      ) : (
        <div className="flex justify-between">
          <div className="w-1/2 pr-2 border-r">
            <h6 className="text-sm text-gray-600">Women</h6>
            <h4 className="text-xl font-bold">{onlineStats.women.toLocaleString()}</h4>
          </div>
          <div className="w-1/2 pl-2">
            <h6 className="text-sm text-gray-600">Men</h6>
            <h4 className="text-xl font-bold">{onlineStats.men.toLocaleString()}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineUsers;