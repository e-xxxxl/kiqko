import React, { useEffect, useState } from 'react';
import CommonLayout from "../../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import shape from '../../../assets/images/shape2.png';
import fev1 from '../../../assets/images/fev1.jpg';
import photo2 from '../../../assets/images/photo2.jpg';
import photo3 from '../../../assets/images/photo3.jpg';
import photo4 from '../../../assets/images/photo4.png';
import photo5 from '../../../assets/images/photo5.png';
import photo6 from '../../../assets/images/photo6.jpg';
import photo7 from '../../../assets/images/photo7.jpg';
import myphoto from '../../../assets/images/myphoto.jpg';
import { MdClear } from 'react-icons/md';

import settingView from '../../../assets/images/myProfile.png';
import settingEdit from '../../../assets/images/editPofile.png';
import settingUpload from '../../../assets/images/updateLocation.png';
import settingReset from '../../../assets/images/resetPassword.png';
import settingHide from '../../../assets/images/hideProfile.png';
import settingDelete from '../../../assets/images/deleteAccount.png';
import settingLogout from '../../../assets/images/logout.png';
import manageMedia from '../../../assets/images/manageMedia.png';
import viewedMe from '../../../assets/images/viewedMe.png';
import myLikes from '../../../assets/images/myLikes.png';
import likesMe from '../../../assets/images/likesMe.png';
import homea from '../../../assets/images/homea.png';
import liveicon from '../../../assets/images/liveicon.png';
import yourm from '../../../assets/images/yourm.png';
import blockedUsers from '../../../assets/images/blockedUsers.png';

import serr from '../../../assets/images/serr.png';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { FaComment } from 'react-icons/fa';


const WhoLkesYou = () => {
  
  const [whoLikedMe, setWhoLikedMe] = useState([]);
const [loading, setisLoading] = useState(true);
const currentUserId = localStorage.getItem("userId");

useEffect(() => {
  const fetchWhoLikedMe = async () => {
    try {
      const res = await axios.get(`https://kiqko-backend.onrender.com/api/users/liked-by/${currentUserId}`);
      setWhoLikedMe(res.data);
    } catch (error) {
      console.error("Error fetching who liked me:", error);
    } finally {
      setisLoading(false);
    }
  };

  fetchWhoLikedMe();
}, [currentUserId]);
  
  return (


<CommonLayout>
  {/* Top decorative shape - hidden on mobile */}
  <section className="hidden md:block">
    <img src={shape} alt="shape" className="w-full" />
  </section>

  {/* Main container */}
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        {/* Online users widget */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h5 className="font-semibold text-gray-800 border-b pb-3 mb-4 text-center">
            Users Online Now
          </h5>
          <div className="flex justify-around">
            <div className="text-center p-3">
              <div className="text-pink-500 mb-2">
                <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Women</h6>
              <h4 className="text-xl font-bold text-gray-800">1,234</h4>
            </div>
            <div className="text-center p-3">
              <div className="text-blue-500 mb-2">
                <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Men</h6>
              <h4 className="text-xl font-bold text-gray-800">1,565</h4>
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="bg-white rounded-xl shadow-sm p-4">
          <ul className="space-y-1">
            {[
              { to: "/profile", icon: homea, text: "Home" },
              { to: "/search-results", icon: serr, text: "Search Results" },
              { to: "/live-users", icon: liveicon, text: "Live Users" },
              { to: "/who-viewed-you", icon: viewedMe, text: "Who Viewed Me" },
              { to: "/who-likes-you", icon: myLikes, text: "Who Likes Me", active: true },
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
                    ${isActive || item.active ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 text-gray-700'}`
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
<div className="w-full">
  {loading ? (
    <div className="text-center py-20">
      <p className="text-gray-500 text-lg animate-pulse">Loading who liked you...</p>
    </div>
  ) : whoLikedMe.length === 0 ? (
    <div className="text-center py-20">
      <p className="text-gray-400 text-lg">No one has liked your profile yet.</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {whoLikedMe.map((user) => (
        <div key={user._id} className="bg-white rounded-2xl shadow-md p-4 group hover:shadow-lg transition-shadow">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
            <img
              src={user.profile?.profilephoto || "/default.jpg"}
              alt={`Profile of ${user.username}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow hover:bg-white transition-colors"
              onClick={() => handleRemoveLike(user._id)}
              title="Remove Like"
            >
              <MdClear className="w-4 h-4 text-gray-600" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-white text-xs font-medium">
                {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
          <h4 className="text-center font-semibold text-gray-800 text-sm truncate">{user.username}</h4>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <NavLink
              to={`/profile/${user._id}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
            >
              View
            </NavLink>
            <button
              className="px-3 py-1 bg-pink-500 text-white rounded-full text-xs hover:bg-pink-600 transition-colors"
              onClick={() => handleLikeBack(user._id)}
            >
              Like Back
            </button>
            <NavLink
              to={`/chat/${user._id}`}
              className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs hover:bg-green-200"
            >
              <FaComment className="w-4 h-4" />
              Chat
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


    </div>
  </div>
</CommonLayout>

     
    );
};

export default WhoLkesYou;