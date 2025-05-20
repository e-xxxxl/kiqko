import React from "react";
import CommonLayout from "../../layouts/Common";
import shape from "../../assets/images/shape2.png";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import settingView from "../../assets/images/myProfile.png";
import settingEdit from "../../assets/images/editPofile.png";
import settingUpload from "../../assets/images/updateLocation.png";
import settingReset from "../../assets/images/resetPassword.png";
import settingHide from "../../assets/images/hideProfile.png";
import settingDelete from "../../assets/images/deleteAccount.png";
import settingLogout from "../../assets/images/logout.png";
import manageMedia from "../../assets/images/manageMedia.png";
import viewedMe from "../../assets/images/viewedMe.png";
import myLikes from "../../assets/images/myLikes.png";
import likesMe from "../../assets/images/likesMe.png";
import homea from "../../assets/images/homea.png";
import liveicon from "../../assets/images/liveicon.png";
import yourm from "../../assets/images/yourm.png";
import blockedUsers from "../../assets/images/blockedUsers.png";
import serr from "../../assets/images/serr.png";
import OnlineUsers from "../profile/OnlineUsers/OnlineUsers";
import { useState, useEffect } from 'react';
import axios from 'axios';
const HideProfile = () => {

   const [isHidden, setIsHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const userId = localStorage.getItem('userId');

  // Fetch current profile visibility status
  useEffect(() => {
    const fetchProfileStatus = async () => {
      try {
        const response = await axios.get(`https://kiqko-backend.onrender.com/api/users/${userId}/profile-status`, {
          withCredentials: true
        });
        setIsHidden(response.data.isHidden);
      } catch (err) {
        console.error('Error fetching profile status:', err);
      }
    };
    
    fetchProfileStatus();
  }, [userId]);

  const handleHideProfile = async () => {
  try {
    setLoading(true);
    const response = await axios.put(
      `https://kiqko-backend.onrender.com/api/users/${userId}/hide-profile`,
      { isHidden: true },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    setIsHidden(true);
    setError(null);
  } catch (err) {
    setError(err.response?.data?.message || 'Failed to hide profile');
    console.error('Hide profile error:', err);
  } finally {
    setLoading(false);
  }
};

  const handleUnhideProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://kiqko-backend.onrender.com/api/users/${userId}/hide-profile`,
        { isHidden: false },
        { withCredentials: true }
      );
      setIsHidden(false);
      setError(null);
    } catch (err) {
      setError('Failed to unhide profile');
      console.error('Unhide profile error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <CommonLayout>
  {/* Hero section with decorative shape */}
  <div className="relative">
    <section className="hidden md:block h-24 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden">
      <img src={shape} alt="shape" className="w-full h-full object-cover opacity-20" />
    </section>
  </div>

  {/* Main container */}
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar - collapses to top on mobile */}
      <div className="w-full lg:w-1/4">
        {/* Online users widget with responsive behavior */}
        <div className="mb-6">
          <OnlineUsers />
        </div>

        {/* Navigation menu */}
        <nav className="bg-white rounded-lg shadow-sm p-4">
          <ul className="space-y-1">
            {[
              { to: "/profile", icon: homea, text: "Home" },
              { to: "/search-results", icon: serr, text: "Search Results" },
              { to: "/live-users", icon: liveicon, text: "Live Users" },
              { to: "/who-viewed-you", icon: viewedMe, text: "Who Viewed Me" },
              { to: "/who-likes-you", icon: myLikes, text: "Who Likes Me" },
              { to: "/my-likes", icon: likesMe, text: "My Likes" },
              { to: "/your-matches", icon: yourm, text: "Your Matches" },
              { to: "/blocked-users", icon: blockedUsers, text: "Blocked Users" },
              { to: "/profile", icon: settingView, text: "View Profile" },
              { to: "/edit-basics", icon: settingEdit, text: "Edit Profile" },
              { to: "/manage-media", icon: manageMedia, text: "Manage Media" },
              { to: "/reset-password", icon: settingReset, text: "Reset Password" },
              { to: "/update-location", icon: settingUpload, text: "Update Location" },
              { to: "/hide-profile", icon: settingHide, text: "Hide Profile" },
              { to: "/delete-account", icon: settingDelete, text: "Delete Account" },
              { to: "/logout", icon: settingLogout, text: "Logout" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `flex items-center gap-3 p-3 rounded-lg transition-colors
                    ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 text-gray-700'}`
                  }
                >
                  <img src={item.icon} alt={item.text} className="w-5 h-5" />
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content area */}
            <div className="w-full lg:w-3/4">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Hide Profile
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-3">
                {isHidden 
                  ? "Your profile is currently hidden" 
                  : "Do you want to hide your profile?"}
              </p>
              <p className="text-gray-500">
                {isHidden
                  ? "Other users can't see your profile while it's hidden."
                  : "Hiding your profile keeps you from being noticed by other users."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isHidden ? (
                <button 
                  onClick={handleHideProfile}
                  disabled={loading}
                  className={`flex-1 sm:flex-none px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 shadow-sm hover:shadow-md ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'Hide My Profile'}
                </button>
              ) : (
                <button 
                  onClick={handleUnhideProfile}
                  disabled={loading}
                  className={`flex-1 sm:flex-none px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 shadow-sm hover:shadow-md ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'Unhide My Profile'}
                </button>
              )}
            </div>
            
            {error && (
              <div className="mt-4 text-center text-red-500">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</CommonLayout>
  );
};

export default HideProfile;
