import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SimilarUsersSection = () => {
  const [similarUsers, setSimilarUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchSimilarUsers = async () => {
      try {
        if (!userId) {
          throw new Error('User ID not found');
        }

        const response = await fetch(`http://localhost:5000/api/users/similar/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch similar users');
        }
        
        const data = await response.json();
        setSimilarUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarUsers();
  }, [userId]);

  if (loading) return <div className="text-center py-4">Loading similar users...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="mt-8">
      <h5 className="text-xl font-semibold mb-4">Similar Matches</h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {similarUsers.length > 0 ? (
          similarUsers.map(user => (
            <div key={user._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <NavLink to={`/profile/${user._id}`}>
                <img 
                  src={user.profile?.photo || 'default-user.jpg'} 
                  alt={user.username} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h6 className="font-bold">{user.username}</h6>
                  <p className="text-sm text-gray-600">
                    {user.profile?.age && `${user.profile.age}, `}
                    {user.profile?.gender || ''}
                  </p>
                  {user.profile?.city && user.profile?.country && (
                    <p className="text-sm text-gray-600">
                      {user.profile.city}, {user.profile.country}
                    </p>
                  )}
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center py-4 text-gray-500">
            No similar users found
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarUsersSection;